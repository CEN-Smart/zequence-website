'use client';

import MainHeading from '@/components/home-page/main-heading';
import CtaButton from '@/components/header/components/buttons/cta-button';

export default function Hero() {
	return (
		<div className='dark:bg-[#1A202C] pb-24 pt-32 md:pt-0 md:pb-0 flex flex-col items-center justify-center lg:min-h-screen bg-[#FBFAF9]'>
			<MainHeading
				className={`
        max-w-5xl 
        w-full 
        mx-auto 
        lg:leading-[72px]
        px-4
        text-[#0F172A]
        dark:text-[#F7FAFC]
        bg-custom

        `}
				isCentered
				heading='Robust, custom, and scalable software solutions for you.'
				subHeading='We unlock
 the power of smart tools to help businesses like yours create human-centered experiences that win
hearts, not just clicks'>
				<CtaButton
					border
					title='Book an appointment'
				/>
			</MainHeading>
		</div>
	);
}
