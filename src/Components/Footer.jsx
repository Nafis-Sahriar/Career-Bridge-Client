'use client';

import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa';

const productLinks = 
[
  {
    label: 'Browse Jobs',
    href: '/jobs',
  },
  {
    label: 'AI Career Assistant',
    href: '#',
  },
  {
    label: 'Companies',
    href: '/companies',
  },
  {
    label: 'Salary Insights',
    href: '#',
  },
];


const navigationLinks = 
[
  {
    label: 'Help Center',
    href: '#',
  },
  {
    label: 'Career Library',
    href: '#',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const resourceLinks = 
[
  {
    label: 'Brand Guidelines',
    href: '#',
  },
  {
    label: 'Newsroom',
    href: '#',
  },
];

const socialLinks = 
[
  {
    icon: FaFacebook,
    href: '#',
  },
  {
    icon: FaPinterest,
    href: '#',
  },
  {
    icon: FaLinkedin,
    href: '#',
  },
];

const Footer = () => 
{
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto w-[90%] py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand Section */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block">
                <h2 className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  CareerBridge
                </h2>
              </Link>

              <p className="mt-6 max-w-sm text-base leading-8 text-default-500">
                The AI-powered career platform built for ambitious professionals and forward-thinking companies.
                Discover opportunities, connect with employers, and grow your career with confidence.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-600"
                  >
                    <Icon width={18} height={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Product
            </h3>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-default-500 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-default-500 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-default-500 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-default-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} CareerBridge. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/terms" className="transition-colors duration-200 hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="transition-colors duration-200 hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/cookies" className="transition-colors duration-200 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;