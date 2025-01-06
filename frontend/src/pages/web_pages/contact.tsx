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
      question: 'How do I get started with ${projectName}?',
      answer:
        "To get started, sign up for a free trial on our website. You'll have access to all features to explore how ${projectName} can benefit your coffee business.",
    },
    {
      question: 'What support options are available?',
      answer:
        'We offer standard support for all users, with priority and dedicated support available for Premium and Business plans. Contact us anytime for assistance.',
    },
    {
      question: 'Can I customize the features for my business?',
      answer:
        'Yes, ${projectName} offers customizable features to suit your business needs. Contact our support team to discuss your specific requirements.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Absolutely. We use industry-standard encryption and security measures to ensure your data is safe and protected at all times.',
    },
    {
      question: 'How can I upgrade my plan?',
      answer:
        'You can upgrade your plan at any time by contacting our support team. They will guide you through the process and ensure a smooth transition.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept various payment methods, including credit cards and PayPal, to make transactions convenient and secure for you.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to the ${projectName} team for any inquiries or support. We're here to help you with your online coffee business needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'test5'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test5'}
          image={['Customer service representative smiling']}
          mainText={`Connect with the ${projectName} Team`}
          subTitle={`Have questions or need assistance? Our team at ${projectName} is here to support your coffee business journey. Reach out to us anytime.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'test5'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <AboutUsSection
          projectName={'test5'}
          image={['Team collaborating in office']}
          mainText={`Meet the Team Behind ${projectName}`}
          subTitle={`At ${projectName}, we are passionate about empowering coffee businesses with innovative tools and insights. Learn more about our mission and values.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Learn More`}
        />

        <ContactFormSection
          projectName={'test5'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on keyboard']}
          mainText={`Reach Out to ${projectName} Support `}
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
