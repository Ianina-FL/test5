const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class OrdersDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const orders = await db.orders.create(
      {
        id: data.id || undefined,

        order_date: data.order_date || null,
        shipment_tracking: data.shipment_tracking || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await orders.setCustomer(data.customer || null, {
      transaction,
    });

    await orders.setCoffee_blends(data.coffee_blends || [], {
      transaction,
    });

    return orders;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const ordersData = data.map((item, index) => ({
      id: item.id || undefined,

      order_date: item.order_date || null,
      shipment_tracking: item.shipment_tracking || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const orders = await db.orders.bulkCreate(ordersData, { transaction });

    // For each item created, replace relation files

    return orders;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const orders = await db.orders.findByPk(id, {}, { transaction });

    await orders.update(
      {
        order_date: data.order_date || null,
        shipment_tracking: data.shipment_tracking || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await orders.setCustomer(data.customer || null, {
      transaction,
    });

    await orders.setCoffee_blends(data.coffee_blends || [], {
      transaction,
    });

    return orders;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const orders = await db.orders.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of orders) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of orders) {
        await record.destroy({ transaction });
      }
    });

    return orders;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const orders = await db.orders.findByPk(id, options);

    await orders.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await orders.destroy({
      transaction,
    });

    return orders;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const orders = await db.orders.findOne({ where }, { transaction });

    if (!orders) {
      return orders;
    }

    const output = orders.get({ plain: true });

    output.payments_order = await orders.getPayments_order({
      transaction,
    });

    output.customer = await orders.getCustomer({
      transaction,
    });

    output.coffee_blends = await orders.getCoffee_blends({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.customers,
        as: 'customer',
      },

      {
        model: db.coffee_blends,
        as: 'coffee_blends',
        through: filter.coffee_blends
          ? {
              where: {
                [Op.or]: filter.coffee_blends.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.coffee_blends ? true : null,
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.shipment_tracking) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'orders',
            'shipment_tracking',
            filter.shipment_tracking,
          ),
        };
      }

      if (filter.calendarStart && filter.calendarEnd) {
        where = {
          ...where,
          [Op.or]: [
            {
              order_date: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
            {
              order_date: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
          ],
        };
      }

      if (filter.order_dateRange) {
        const [start, end] = filter.order_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            order_date: {
              ...where.order_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            order_date: {
              ...where.order_date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.customer) {
        const listItems = filter.customer.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          customerId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.orders.count({
            where,
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.orders.findAndCountAll({
          where,
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, offset) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('orders', 'order_date', query),
        ],
      };
    }

    const records = await db.orders.findAll({
      attributes: ['id', 'order_date'],
      where,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      orderBy: [['order_date', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.order_date,
    }));
  }
};
