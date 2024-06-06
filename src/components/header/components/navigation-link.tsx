'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Resource } from '@/docs/resources';
import { usePathname } from 'next/navigation';
import ComingSoonBadge from '@/components/ui/coming-soon-badge';

interface NavigationLinkProps {
	navigationlink: Resource;
}

const NavigationLink = ({ navigationlink }: NavigationLinkProps) => {
	const pathname = usePathname();
	const NavIcon = navigationlink.icon;
	return (
		<Link
			className={cn(
				` flex item-start gap-2 px-4 py-2 rounded-md text-sm text-zequence-secondary-color hover:bg-zequence-primary-color/10 transition duration-300
              dark:text-white
              dark:hover:bg-zequence-primary-color/10
              dark:hover:text-zequence-primary-color font-semibold  hover:text-zequence-primary-color/90  group`,
				{
					' bg-zequence-primary-color/20': pathname === navigationlink.href,
				}
			)}
			href={navigationlink.href}>
			<NavIcon className='size-4 text-zequence-primary-color inline-block shrink-0' />
			<p className=' whitespace-nowrap'>
				<span>
					<span
						className={cn(`
          group-hover:text-zequence-primary-color/90 transition duration-300
        dark:text-neutral-900 font-semibold
        `)}>
						<span>
							{navigationlink.title}
							{navigationlink.comingSoon && (
								<ComingSoonBadge title='Coming soon' />
							)}
						</span>
					</span>
				</span>
				{navigationlink.description && (
					<span
						className={`block text-neutral-700 dark:text-neutral-900 text-xs text-pretty
            group-hover:text-zequence-primary-color/90 transition duration-300
          `}>
						{navigationlink.description}
					</span>
				)}
			</p>
		</Link>
	);
};

export default NavigationLink;
