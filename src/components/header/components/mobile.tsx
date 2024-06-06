'use client';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { paths } from '@/utils/path';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/header/components/logo';
import {
	MobileDrawerState,
	useMobileDrawerState,
} from '@/hooks/use-mobile-drawer-state';

import { products } from '@/docs/products';
import { resources } from '@/docs/resources';
import { company } from '@/docs/company';
import CtaButton from './buttons/cta-button';
import MobileNavigationLink from './mobile-nav-link';
export default function MobileMenu() {
	const pathname = usePathname();
	const mobileDrawer: MobileDrawerState = useMobileDrawerState();

	return (
		<Drawer
			onClose={() => mobileDrawer.setOpen(false)}
			open={mobileDrawer.open}
			direction='right'>
			<DrawerContent className=' h-[90vh] overflow-y-auto w-screen max-w-screen overflow-x-clip pt-8 bg-custom'>
				<nav className='flex flex-col'>
					{/* Products with a clickable dropdown menu*/}
					<MobileNavigationLink
						label='Products'
						navigationlink={products}
					/>

					{/* Resources with a clickable dropdown menu*/}
					<MobileNavigationLink
						label='Resources'
						navigationlink={resources}
					/>

					{/* Company with a clickable dropdown menu*/}
					<MobileNavigationLink
						label='Company'
						navigationlink={company}
					/>

					{/* Contact Us */}
					<Link
						onClick={() => mobileDrawer.setOpen(false)}
						href={paths.contactUsPath()}
						className={cn(
							`
              text-sm text-zequence-secondary-color p-4  hover:bg-zequence-primary-color/10 transition duration-300
              dark:text-white
              dark:hover:bg-zequence-primary-color/10
              dark:hover:text-zequence-primary-color font-semibold border-b border-gray-300 ml-2

              
              `,
							{
								'bg-zequence-primary-color/20 ':
									pathname === paths.contactUsPath(),
							}
						)}>
						Contact Us
					</Link>
				</nav>
				<DrawerFooter className='p-4 flex pb-12 flex-col gap-3'>
					<CtaButton
						className='py-[25px] '
						title='Get started'
					/>
					<CtaButton
						className='py-[25px] '
						border
						title='Book an appointment'
					/>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
