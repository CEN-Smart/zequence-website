'use client';
import Socials from './socials';
import Logo from '../header/components/logo';
import FooterLinks from './footer-links';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FootLink {
  href: string;
  label: string;
}

const footLink: FootLink[] = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

const Footer = () => {
  return (
    <section className="bg-custom">
      <footer className={cn(`container-width py-16 pt-32 px-3`)}>
        <div className=" border-b border-black dark:border-white pb-12">
          <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
            <Logo />
            <FooterLinks />
            <Socials />
          </div>
        </div>
        <p className="text-center flex-col md:flex-row flex items-center justify-center pt-8 gap-4">
          <span>
            © {new Date().getFullYear()} Zequence. All rights reserved.
          </span>
          {footLink.map(footLink => (
            <Link
              className="text-black dark:text-white text-sm hover:text-zequence-primary-color/90 dark:hover:text-zequence-primary-color/90 transition duration-300 border-b border-black dark:border-white inline-block hover:border-b-0"
              key={footLink.href}
              href={footLink.href}
            >
              {footLink.label}
            </Link>
          ))}
        </p>
      </footer>
    </section>
  );
};

export default Footer;
