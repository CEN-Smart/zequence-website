import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { PiNotebookLight } from 'react-icons/pi';
import { IconType } from 'react-icons';

interface Company {
	icon: IconType;
	title: string;
	href: string;
}

export const company: Company[] = [
	{
		icon: HiOutlineBuildingOffice2,
		title: 'About Us',
		href: '/about-us',
	},
	{
		icon: AiOutlineUsergroupAdd,
		title: 'Work with us',
		href: '#',
	},
	{
		icon: PiNotebookLight,
		title: 'Press',
		href: '#',
	},
];
