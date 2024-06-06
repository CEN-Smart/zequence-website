'use client';

import MainHeading from '@/components/home-page/main-heading';
import CtaButton from '@/components/header/components/buttons/cta-button';

export default function HeadingAbout() {
	return (
		<div className='dark:bg-[#1A202C] pt-40 md:pt-12 md:pb-0 flex flex-col items-center justify-center lg:min-h-screen bg-[#FBFAF9]'>
			<MainHeading
				className={`
        max-w-[768px] 
        w-full 
        mx-auto 
        lg:leading-[72px]
        px-4
        text-[#0F172A]
        dark:text-[#F7FAFC]
        bg-custom

        `}
				isCentered
				heading='We are not just solution architects, but sales and business development experts.'></MainHeading>
		</div>
	);
}
