'use client';
import Link from 'next/link';

interface Link {
	href: string;
	label: string;
}

const links: Link[] = [
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'Services' },
	{ href: '#', label: 'Company' },
	{ href: '#', label: 'Blog' },
	{ href: '/contact-us', label: 'Contact Us' },
];

const FooterLinks = () => {
	return (
		<nav className='flex flex-wrap justify-center items-center gap-x-4'>
			{links.map(link => (
				<Link
					className='text-black dark:text-white'
					key={link.href}
					href={link.href}>
					{link.label}
				</Link>
			))}
		</nav>
	);
};

export default FooterLinks;
