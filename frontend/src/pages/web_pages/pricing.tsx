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
  PricingDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const pricing_features = {
    standard: {
      features: [
        'Basic Inventory Management',
        'Customer Database',
        'Order Processing',
      ],
      limited_features: ['Basic Reports', 'Standard Support'],
    },
    premium: {
      features: [
        'Advanced Inventory Management',
        'Comprehensive Customer Insights',
        'Enhanced Order Processing',
      ],
      also_included: [
        'Detailed Reports',
        'Priority Support',
        'Payment Processing',
      ],
    },
    business: {
      features: [
        'Full Inventory Management',
        'Complete Customer Insights',
        'Advanced Order Processing',
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

  const features_points = [
    {
      name: 'Inventory Management',
      description:
        'Keep track of your coffee blends effortlessly. Manage stock levels and ensure your best products are always available for your customers.',
      icon: 'mdiWarehouse',
    },
    {
      name: 'Customer Insights',
      description:
        'Gain valuable insights into customer preferences and order history. Use this data to personalize their experience and increase satisfaction.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Order Processing',
      description:
        'Streamline your order management from grind selection to shipment tracking. Ensure timely deliveries and happy customers with efficient processing.',
      icon: 'mdiTruckDelivery',
    },
  ];

  const testimonials = [
    {
      text: 'Since using ${projectName}, our coffee sales have skyrocketed. The inventory management feature is a lifesaver!',
      company: 'BrewMasters Inc.',
      user_name: 'John Doe, Operations Manager',
    },
    {
      text: 'The customer insights provided by ${projectName} have allowed us to tailor our offerings and boost customer satisfaction.',
      company: 'Coffee Haven',
      user_name: 'Jane Smith, Marketing Director',
    },
    {
      text: 'Order processing is now seamless and efficient. ${projectName} ensures our deliveries are always on time.',
      company: 'Espresso Express',
      user_name: 'Mike Johnson, Logistics Coordinator',
    },
    {
      text: 'The detailed reports have helped us make informed decisions and grow our business exponentially.',
      company: 'Caffeine Dreams',
      user_name: 'Emily Brown, CEO',
    },
    {
      text: 'Managing our coffee blends and categories has never been easier. ${projectName} keeps everything organized.',
      company: 'Bean Bliss',
      user_name: 'Chris Green, Product Manager',
    },
    {
      text: 'The secure payment processing gives us peace of mind knowing our transactions are handled smoothly.',
      company: 'Roast \u0026 Toast',
      user_name: 'Sarah White, Finance Officer',
    },
  ];

  const faqs = [
    {
      question: 'What is included in the Standard plan?',
      answer:
        "The Standard plan includes basic inventory management, customer database, and order processing. It's ideal for small coffee shops or individual entrepreneurs.",
    },
    {
      question: 'Can I switch plans at any time?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. Simply contact our support team to assist with the transition and ensure a smooth process.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial for new users to explore the features of ${projectName} and see how it can benefit their coffee business.',
    },
    {
      question: 'How secure is the payment processing?',
      answer:
        'Our payment processing is highly secure, utilizing industry-standard encryption to ensure all transactions are safe and reliable.',
    },
    {
      question: 'What kind of support is included in each plan?',
      answer:
        'Standard support is available for all plans, with priority and dedicated support available for Premium and Business plans, respectively.',
    },
    {
      question: 'How do I get started with ${projectName}?',
      answer:
        "To get started, sign up for a free trial on our website. You'll have access to all features to explore how ${projectName} can benefit your coffee business.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Flexible Pricing Plans for ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore our competitive pricing plans designed to suit businesses of all sizes. Discover the perfect plan for your coffee business with ${projectName}.`}
        />
      </Head>
      <WebSiteHeader projectName={'test5'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test5'}
          image={['Pricing plans on a screen']}
          mainText={`Choose Your Perfect ${projectName} Plan`}
          subTitle={`Explore our flexible pricing options tailored to meet the needs of your coffee business. Find the right plan to elevate your operations with ${projectName}.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`View Plans`}
        />

        <PricingSection
          projectName={'test5'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <FeaturesSection
          projectName={'test5'}
          image={['Coffee shop management tools']}
          withBg={0}
          features={features_points}
          mainText={`Unlock Powerful Features with ${projectName}`}
          subTitle={`Discover how ${projectName} can transform your coffee business with innovative features designed to streamline operations and boost sales.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test5'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <FaqSection
          projectName={'test5'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test5'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
