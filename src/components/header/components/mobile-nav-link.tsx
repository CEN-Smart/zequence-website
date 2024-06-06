'use client';
import { Resource } from '@/docs/resources';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { usePathname } from 'next/navigation';
import {
  MobileDrawerState,
  useMobileDrawerState,
} from '@/hooks/use-mobile-drawer-state';
import ComingSoonBadge from '@/components/ui/coming-soon-badge';

interface MobileNavigationLinkProps {
  navigationlink: Resource[];
  label: string;
}

const MobileNavigationLink = ({
  navigationlink,
  label,
}: MobileNavigationLinkProps) => {
  const pathname = usePathname();
  const mobileDrawer: MobileDrawerState = useMobileDrawerState();
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className={cn('w-full border-none pt-2 overflow-auto px-2')}
        value="item-1"
      >
        <AccordionTrigger
          className={cn(
            `
                hover:no-underline hover:bg-zequence-primary-color/10 transition duration-300 px-4 border-none
                dark:text-white
                dark:hover:bg-zequence-primary-color/10
                dark:hover:text-zequence-primary-color font-semibold
                
                `
          )}
        >
          {label}
        </AccordionTrigger>
        <AccordionContent
          className={cn(
            'flex flex-col border-none gap-2 overflow-auto h-fit z-50 bg-[#FBFAF9] my-4 rounded-[12px] drop-shadow-lg'
          )}
        >
          {navigationlink.map(r => {
            const NavIcon = r.icon;
            return (
              <Link
                onClick={() => mobileDrawer.setOpen(false)}
                className={cn(
                  'hover:bg-zequence-primary-color/10 transition duration-300 py-2 px-4 w-full rounded-md flex items-start gap-4',
                  {
                    'bg-zequence-primary-color/20': pathname === r.href,
                  }
                )}
                key={r.title}
                href={r.href}
              >
                <NavIcon className="size-4 text-zequence-primary-color shrink-0" />
                <p className="">
                  <span>
                    <span
                      className={cn(`
          group-hover:text-zequence-primary-color/90 transition duration-300
        dark:text-neutral-900 font-semibold
        `)}
                    >
                      <span>
                        {r.title}
                        {r.comingSoon && (
                          <ComingSoonBadge title="Coming soon" />
                        )}
                      </span>
                    </span>
                  </span>
                  {r.description && (
                    <span
                      className={`block text-neutral-700 dark:text-neutral-900 text-xs
            group-hover:text-zequence-primary-color/90 transition duration-300
          `}
                    >
                      {r.description}
                    </span>
                  )}
                </p>
              </Link>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNavigationLink;
