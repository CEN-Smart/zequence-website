import { IconType } from 'react-icons';
import { RiNewspaperLine } from 'react-icons/ri';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { PiFileDocDuotone } from 'react-icons/pi';
import { PiUserCircleThin } from 'react-icons/pi';

export interface Resource {
	title: string;
	description?: string;
	icon: IconType;
	href: string;
	comingSoon?: boolean;
}

export const resources: Resource[] = [
	// blog
	{
		title: 'Blog',
		description: 'The latest industry news, updates and info.',
		icon: RiNewspaperLine,
		href: '#',
		comingSoon: false,
	},
	// customer stories
	{
		title: 'Customer Stories',
		description: 'Learn how our customers are making big changes.',
		icon: RiCustomerServiceLine,
		href: '#',
		comingSoon: false,
	},
	// help and support
	{
		title: 'Help and Support',
		description: 'Learn, fix a problem, and get answers to your questions.',
		icon: PiUserCircleThin,
		href: '#',
		comingSoon: false,
	},
];
