import ContactUs from '@/components/contact-us/contact-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Contact us to get started with your project.',
	keywords: ['Zequence Digital Limited', 'About Us'],
	metadataBase: new URL('https://www.zequencedigital.com'),
	openGraph: {
		title: 'About Us',
		description: 'Learn more about Zequence Digital Limited.',
		type: 'website',
		url: 'https://www.zequencedigital.com/about-us',
		images: [
			{
				url: 'https://www.zequencedigital.com/images/zequence-logo.svg',
				width: 800,
				height: 600,
				alt: 'Zequence Digital Limited Logo',
			},
		],
	},
};

const ContactUsPage = () => {
	return <ContactUs />;
};

export default ContactUsPage;
