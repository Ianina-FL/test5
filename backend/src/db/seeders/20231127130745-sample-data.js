const db = require('../models');
const Users = db.users;

const Categories = db.categories;

const CoffeeBlends = db.coffee_blends;

const Customers = db.customers;

const Orders = db.orders;

const Payments = db.payments;

const Reports = db.reports;

const CategoriesData = [
  {
    name: 'Franz Boas',
  },

  {
    name: 'Enrico Fermi',
  },

  {
    name: 'Hans Selye',
  },

  {
    name: 'Euclid',
  },

  {
    name: 'Rudolf Virchow',
  },
];

const CoffeeBlendsData = [
  {
    name: 'Neils Bohr',

    price: 64.65,

    stock_level: 9,

    // type code here for "relation_many" field
  },

  {
    name: 'Comte de Buffon',

    price: 28.19,

    stock_level: 5,

    // type code here for "relation_many" field
  },

  {
    name: 'John von Neumann',

    price: 13.48,

    stock_level: 9,

    // type code here for "relation_many" field
  },

  {
    name: 'Antoine Laurent Lavoisier',

    price: 38.15,

    stock_level: 9,

    // type code here for "relation_many" field
  },

  {
    name: 'Carl Linnaeus',

    price: 86.08,

    stock_level: 3,

    // type code here for "relation_many" field
  },
];

const CustomersData = [
  {
    first_name: 'Ernst Haeckel',

    last_name: 'Emil Fischer',

    email: 'Emil Kraepelin',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Marcello Malpighi',

    last_name: 'Paul Ehrlich',

    email: 'Charles Sherrington',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Max Planck',

    last_name: 'Jean Baptiste Lamarck',

    email: 'James Clerk Maxwell',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Karl Landsteiner',

    last_name: 'Marcello Malpighi',

    email: 'Johannes Kepler',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Carl Linnaeus',

    last_name: 'Theodosius Dobzhansky',

    email: 'Noam Chomsky',

    // type code here for "relation_many" field
  },
];

const OrdersData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    order_date: new Date(),

    shipment_tracking: 'Antoine Laurent Lavoisier',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    order_date: new Date(),

    shipment_tracking: 'Charles Lyell',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    order_date: new Date(),

    shipment_tracking: 'Francis Crick',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    order_date: new Date(),

    shipment_tracking: 'Comte de Buffon',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    order_date: new Date(),

    shipment_tracking: 'John von Neumann',
  },
];

const PaymentsData = [
  {
    // type code here for "relation_one" field

    amount: 77.35,

    status: 'Completed',

    payment_date: new Date(),
  },

  {
    // type code here for "relation_one" field

    amount: 42.87,

    status: 'Refunded',

    payment_date: new Date(),
  },

  {
    // type code here for "relation_one" field

    amount: 30.81,

    status: 'Completed',

    payment_date: new Date(),
  },

  {
    // type code here for "relation_one" field

    amount: 49.52,

    status: 'Pending',

    payment_date: new Date(),
  },

  {
    // type code here for "relation_one" field

    amount: 54.66,

    status: 'Completed',

    payment_date: new Date(),
  },
];

const ReportsData = [
  {
    generated_at: new Date(),

    report_type: 'Sheldon Glashow',

    // type code here for "files" field
  },

  {
    generated_at: new Date(),

    report_type: 'Francis Crick',

    // type code here for "files" field
  },

  {
    generated_at: new Date(),

    report_type: 'Frederick Gowland Hopkins',

    // type code here for "files" field
  },

  {
    generated_at: new Date(),

    report_type: 'Leonard Euler',

    // type code here for "files" field
  },

  {
    generated_at: new Date(),

    report_type: 'Konrad Lorenz',

    // type code here for "files" field
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateOrderWithCustomer() {
  const relatedCustomer0 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setCustomer) {
    await Order0.setCustomer(relatedCustomer0);
  }

  const relatedCustomer1 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setCustomer) {
    await Order1.setCustomer(relatedCustomer1);
  }

  const relatedCustomer2 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setCustomer) {
    await Order2.setCustomer(relatedCustomer2);
  }

  const relatedCustomer3 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setCustomer) {
    await Order3.setCustomer(relatedCustomer3);
  }

  const relatedCustomer4 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setCustomer) {
    await Order4.setCustomer(relatedCustomer4);
  }
}

// Similar logic for "relation_many"

async function associatePaymentWithOrder() {
  const relatedOrder0 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment0 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Payment0?.setOrder) {
    await Payment0.setOrder(relatedOrder0);
  }

  const relatedOrder1 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment1 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Payment1?.setOrder) {
    await Payment1.setOrder(relatedOrder1);
  }

  const relatedOrder2 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment2 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Payment2?.setOrder) {
    await Payment2.setOrder(relatedOrder2);
  }

  const relatedOrder3 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment3 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Payment3?.setOrder) {
    await Payment3.setOrder(relatedOrder3);
  }

  const relatedOrder4 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment4 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Payment4?.setOrder) {
    await Payment4.setOrder(relatedOrder4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Categories.bulkCreate(CategoriesData);

    await CoffeeBlends.bulkCreate(CoffeeBlendsData);

    await Customers.bulkCreate(CustomersData);

    await Orders.bulkCreate(OrdersData);

    await Payments.bulkCreate(PaymentsData);

    await Reports.bulkCreate(ReportsData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateOrderWithCustomer(),

      // Similar logic for "relation_many"

      await associatePaymentWithOrder(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('coffee_blends', null, {});

    await queryInterface.bulkDelete('customers', null, {});

    await queryInterface.bulkDelete('orders', null, {});

    await queryInterface.bulkDelete('payments', null, {});

    await queryInterface.bulkDelete('reports', null, {});
  },
};
