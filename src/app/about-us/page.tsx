import Achievement from '@/components/about-us/achievement';
import AboutCallToAction from '@/components/about-us/call-to-action';
import HeadingAbout from '@/components/about-us/heading-about';
import HeroAbout from '@/components/about-us/hero-about';
import OurValue from '@/components/about-us/our-value';
import PressNews from '@/components/about-us/press-news';
import ValueHighlights from '@/components/about-us/value-highlight';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Us',
	description: 'Learn more about Zequence Digital Limited.',
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

export default function AboutUsPage() {
	return (
		<>
			<HeadingAbout />
			<HeroAbout />
			<Achievement />
			<OurValue />
			<ValueHighlights />
			<AboutCallToAction />
			<PressNews />
		</>
	);
}
