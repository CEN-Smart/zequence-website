'use client';
import { cn } from '@/lib/utils';
import { paths } from '@/utils/path';
import Link from 'next/link';
import Logo from '@/components/header/components/logo';
import { usePathname } from 'next/navigation';
import CtaButton from '@/components/header/components/buttons/cta-button';
import Tabs from './navigation-menu';
import { useMediaQuery } from '@/hooks/use-media-query';
import theme from 'tailwindcss/defaultTheme';
import {
  MobileDrawerState,
  useMobileDrawerState,
} from '@/hooks/use-mobile-drawer-state';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import MobileMenu from './mobile';
import React from 'react';

export default function DesktopMenu() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery(`(min-width: ${theme.screens.lg})`);
  const mobileDrawer: MobileDrawerState = useMobileDrawerState();
  const [mounted, setMounted] = React.useState(false);

  const handleOpenMenu = () => {
    mobileDrawer.setOpen(!mobileDrawer.open);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      role="banner"
      className={cn(`
        fixed
        top-0
        left-0
        right-0
        h-[72px]
        flex
        z-50
        border-b
        border-gray-200
        dark:border-gray-700
         text-[#0F172A]
        dark:text-[#F7FAFC]
        bg-custom
        drop-shadow-md
        transition-all
        duration-300
        ease-in-out
        backdrop-filter
        backdrop-blur-md
        backdrop-saturate-150
        backdrop-contrast-75
        backdrop-brightness-125
        backdrop-opacity-50
        dark:backdrop-blur-md
        dark:backdrop-saturate-150
        dark:backdrop-contrast-75
        dark:backdrop-brightness-125
        dark:backdrop-opacity-50
      
      `)}
    >
      <nav
        className={cn(
          'flex items-center justify-between gap-4  container-width '
        )}
      >
        <div className="flex items-center gap-8">
          <Logo />
          {isDesktop ? (
            <>
              {/* Tab for Products Resources and Company*/}
              <Tabs />
              <Link
                href={paths.contactUsPath()}
                className={cn(
                  'text-sm font-medium inline-block hover:text-zequence-primary-color/90 transition duration-300',
                  {
                    ' text-orange-600 font-semibold':
                      pathname === paths.contactUsPath(),
                  }
                )}
              >
                Contact Us
              </Link>
            </>
          ) : (
            <MobileMenu />
          )}
        </div>
        {isDesktop ? (
          <div className="space-x-3">
            <CtaButton border title="Book an appointment" />
            <CtaButton title="Get started" />
          </div>
        ) : (
          <button onClick={handleOpenMenu} className="">
            {mobileDrawer.open ? (
              <Cross2Icon className="size-6" />
            ) : (
              <HamburgerMenuIcon className="size-6" />
            )}
          </button>
        )}
      </nav>
    </header>
  );
}
