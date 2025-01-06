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
  ContactFormDesigns,
  FaqDesigns,
  AboutUsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers features like inventory management, customer insights, and order processing to streamline your coffee business operations.',
    },
    {
      question: 'How can I start using ${projectName}?',
      answer:
        'You can start by signing up for a free trial on our website. This will give you access to all features to explore how ${projectName} can benefit your business.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, we prioritize data security and use industry-standard encryption to ensure your information is safe and protected at all times.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Absolutely. You can upgrade your plan at any time to access more features and support. Contact our support team for assistance.',
    },
    {
      question: 'What kind of support is available?',
      answer:
        'We offer standard support for all users, with priority and dedicated support available for Premium and Business plans.',
    },
    {
      question: 'Does ${projectName} offer a free trial?',
      answer:
        'Yes, we provide a 14-day free trial for new users to explore the features and see how ${projectName} can enhance their coffee business.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and how we can help your coffee business thrive.`}
        />
      </Head>
      <WebSiteHeader projectName={'test5'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test5'}
          image={['Person reading a FAQ document']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how we can support your coffee business.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'test5'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <AboutUsSection
          projectName={'test5'}
          image={['Team brainstorming in office']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to empowering coffee businesses with innovative solutions. Learn more about our mission and the team driving our success.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Our Story`}
        />

        <ContactFormSection
          projectName={'test5'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have more questions? Contact us anytime for inquiries or support. Our team at ${projectName} is here to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'test5'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
