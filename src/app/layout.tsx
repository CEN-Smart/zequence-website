import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { cn } from '@/lib/utils';
import { LightDarkModeToggle } from '@/theme/light-dark-mode';
import { inter } from '@/components/ui/fonts/fonts';
import Footer from '@/components/footer/footer';
import DesktopMenu from '@/components/header/components/desktop';
import { Toaster } from 'react-hot-toast';
import { WhatsAppPopoverChat } from '@/components/whatsapp/whatsapp-popover-chat';
import ScrollToTopButton from '@/components/footer/scroll-to-top';

export const metadata: Metadata = {
	title: {
		template: `%s | Zequence Digital Limited`,
		default: 'Home Page | Zequence Digital Limited',
	},
	keywords: [
		'web development',
		'web design',
		'digital marketing',
		'Zequence Digital Limited',
		'Zequence',
		'Inventory Management System',
		'Zequence Inventory Management System',
		'Zequence Pay',
		'Software Consultancy',
		'Zequence Software Consultancy',
		'Zequence Pay',
	],
	icons: {
		icon: [
			{
				url: 'favicon.ico',
			},
		],
	},
	metadataBase: new URL('https://www.zequencedigital.com'),
	description:
		'Zequence Digital Limited is a digital agency that specializes in web development, web design, and digital marketing. We help businesses grow their online presence and increase their revenue. Contact us today to learn more.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(`${inter.className}`)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<DesktopMenu />
					<WhatsAppPopoverChat />
					<div>
						{children}
						<Toaster />
					</div>
					<Footer />
					<LightDarkModeToggle />
					<ScrollToTopButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
