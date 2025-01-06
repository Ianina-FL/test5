import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  PricingDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test5';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/products',
      label: 'products',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/pricing',
      label: 'pricing',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Blend Management',
      description:
        'Easily organize and manage your coffee blends. Keep track of stock levels and ensure your best products are always available.',
      icon: 'mdiCoffee',
    },
    {
      name: 'Category Sorting',
      description:
        "Sort your coffee blends into categories like 'Organic' or 'Seasonal' to help customers find their perfect cup effortlessly.",
      icon: 'mdiFilterVariant',
    },
    {
      name: 'Customer Database',
      description:
        'Maintain a detailed database of your customers, including order history and preferences, to personalize their shopping experience.',
      icon: 'mdiAccountMultiple',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Basic Blend Management',
        'Category Sorting',
        'Customer Database',
      ],
      limited_features: ['Basic Reports', 'Standard Support'],
    },
    premium: {
      features: [
        'Advanced Blend Management',
        'Enhanced Category Sorting',
        'Comprehensive Customer Database',
      ],
      also_included: [
        'Detailed Reports',
        'Priority Support',
        'Payment Processing',
      ],
    },
    business: {
      features: [
        'Full Blend Management',
        'Custom Category Sorting',
        'Complete Customer Database',
        'Custom Reports',
        'Dedicated Support',
        'Full Payment Solutions',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual coffee enthusiasts or small shops looking to manage their products efficiently.',
    premium:
      'Perfect for small businesses or startups that need advanced features and priority support to grow their coffee operations.',
    business:
      'Designed for large enterprises requiring comprehensive management tools and dedicated support to scale their coffee business.',
  };

  const faqs = [
    {
      question: 'What features are included in the Standard plan?',
      answer:
        "The Standard plan includes basic blend management, category sorting, and a customer database. It's perfect for individuals or small coffee shops starting out.",
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade your plan at any time to access more features and support. Simply contact our support team to assist with the transition.',
    },
    {
      question: 'How does the customer database work?',
      answer:
        'The customer database allows you to store detailed information about your customers, including their order history and preferences, to personalize their experience.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial for new users to explore the features of ${projectName} and see how it can benefit their coffee business.',
    },
    {
      question: 'What kind of support is included?',
      answer:
        'Standard support is available for all plans, with priority and dedicated support available for Premium and Business plans, respectively.',
    },
    {
      question: 'How secure is the payment processing?',
      answer:
        'Our payment processing is highly secure, utilizing industry-standard encryption to ensure all transactions are safe and reliable.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Explore Our Coffee Products and Services`}</title>
        <meta
          name='description'
          content={`Discover a wide range of coffee blends and services tailored to enhance your online coffee business. Learn more about our offerings and pricing.`}
        />
      </Head>
      <WebSiteHeader projectName={'test5'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test5'}
          image={['Assorted coffee blends display']}
          mainText={`Discover Premium Coffee Products with ${projectName}`}
          subTitle={`Explore our diverse range of coffee blends and services designed to elevate your online coffee business. Find the perfect products to delight your customers.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Shop Now`}
        />

        <FeaturesSection
          projectName={'test5'}
          image={['Coffee shop management tools']}
          withBg={1}
          features={features_points}
          mainText={`Unleash the Power of ${projectName} Features`}
          subTitle={`Discover how ${projectName} can enhance your coffee business with innovative features designed to streamline operations and boost sales.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'test5'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <FaqSection
          projectName={'test5'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test5'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person writing an email']}
          mainText={`Reach Out to ${projectName} Team `}
          subTitle={`We're here to help! Contact us anytime for inquiries or support. Our team at ${projectName} is ready to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'test5'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
