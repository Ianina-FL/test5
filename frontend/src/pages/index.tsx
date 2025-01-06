import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  PricingDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import PricingSection from '../components/WebPageComponents/PricingComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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
      name: 'Inventory Management',
      description:
        'Effortlessly track and manage your coffee blends. Keep your stock levels optimized and never run out of your best sellers.',
      icon: 'mdiWarehouse',
    },
    {
      name: 'Customer Insights',
      description:
        'Gain valuable insights into customer preferences and order history. Tailor your offerings to meet their needs and boost satisfaction.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Order Processing',
      description:
        'Streamline your order management from grind selection to shipment tracking. Ensure timely deliveries and happy customers.',
      icon: 'mdiTruckDelivery',
    },
  ];

  const testimonials = [
    {
      text: 'Using ${projectName} has revolutionized our coffee business. The inventory management is seamless, and our sales have increased significantly!',
      company: 'BrewMasters Inc.',
      user_name: 'John Doe, Operations Manager',
    },
    {
      text: 'The customer insights feature is a game-changer. We can now tailor our offerings to meet customer preferences, boosting satisfaction.',
      company: 'Coffee Haven',
      user_name: 'Jane Smith, Marketing Director',
    },
    {
      text: 'Order processing has never been easier. ${projectName} ensures our deliveries are always on time, keeping our customers happy.',
      company: 'Espresso Express',
      user_name: 'Mike Johnson, Logistics Coordinator',
    },
    {
      text: 'The real-time analytics provided by ${projectName} have helped us make informed decisions and grow our business exponentially.',
      company: 'Caffeine Dreams',
      user_name: 'Emily Brown, CEO',
    },
    {
      text: 'We love how easy it is to manage our coffee blends and categories. ${projectName} keeps everything organized and efficient.',
      company: 'Bean Bliss',
      user_name: 'Chris Green, Product Manager',
    },
    {
      text: 'The payment processing is secure and reliable. ${projectName} gives us peace of mind knowing our transactions are handled smoothly.',
      company: 'Roast \u0026 Toast',
      user_name: 'Sarah White, Finance Officer',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Inventory Management',
        'Basic Customer Insights',
        'Order Processing',
      ],
      limited_features: ['Limited Reports', 'Basic Support'],
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
      'Ideal for individual entrepreneurs or small coffee shops looking to manage their operations efficiently.',
    premium:
      'Perfect for small businesses or startups that need advanced features and priority support to grow their coffee business.',
    business:
      'Designed for large enterprises requiring comprehensive management tools and dedicated support to scale their operations.',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Manage Your Online Coffee Business with Ease`}</title>
        <meta
          name='description'
          content={`Discover the ultimate toolkit for managing your online coffee business. From inventory to customer management, streamline your operations and boost sales.`}
        />
      </Head>
      <WebSiteHeader projectName={'test5'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test5'}
          image={['Coffee beans and laptop']}
          mainText={`Elevate Your Coffee Business with ${projectName}`}
          subTitle={`Streamline your online coffee operations with ${projectName}. Manage blends, orders, and customer insights effortlessly to boost your sales.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test5'}
          image={['Coffee shop management tools']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Explore how ${projectName} can transform your coffee business with powerful tools and insights.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test5'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About ${projectName} `}
        />

        <PricingSection
          projectName={'test5'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'test5'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'test5'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
