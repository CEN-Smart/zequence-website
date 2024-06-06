import { IconType } from 'react-icons';
import { MdOutlineInventory } from 'react-icons/md';

export const products: {
	title: string;
	href: string;
	icon: IconType;
	description: string;
	comingSoon?: boolean;
}[] = [
	{
		title: 'Zequence Automation and Inventory App',
		href: '#',
		description:
			'A web application that helps you manage your inventory and automate your business processes.',
		comingSoon: true,
		icon: MdOutlineInventory,
	},
	{
		title: 'Zequence Pay',
		href: '#',
		description: 'A payment gateway that allows you to accept payments online.',
		comingSoon: true,
		icon: MdOutlineInventory,
	},
	{
		title: 'Software Consulting',
		href: '#',
		description:
			'We offer software consulting services to help you build and scale your software products.',
		comingSoon: true,
		icon: MdOutlineInventory,
	},
	{
		title: 'Zequence Digital Limited',
		href: '#',
		description:
			'We are a software development company that helps businesses build and scale their software products.',
		comingSoon: true,
		icon: MdOutlineInventory,
	},
	{
		title: 'Zequence CRM',
		href: '#',
		description:
			'A customer relationship management system that helps you manage your customers and grow your business.',
		comingSoon: true,
		icon: MdOutlineInventory,
	},
];
