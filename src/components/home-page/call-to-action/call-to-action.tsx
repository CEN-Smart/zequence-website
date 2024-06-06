'use client';
import { cn } from '@/lib/utils';
import CtaButton from '@/components/header/components/buttons/cta-button';
import topRightImage from '/public/images/absolute-top-right-image.png';
import bottomLeftImage from '/public/images/absolute-bottom-left-image.png';
import Image from 'next/image';
import MainHeading from '../main-heading';

const HomePageCallToAction = () => {
	return (
		<div
			className={cn(`bg-black dark:bg-white dark:text-[#1A202C]
           text-[#F7FAFC]  flex items-center justify-center  h-[350px] lg:h-[506px] relative overflow-hidden px-3`)}>
			<Image
				src={topRightImage}
				alt='Top Right Image'
				className='absolute top-0 lg:w-48 lg:h-36 w-12 h-12 right-0 z-0 filter dark:invert blur-sm'
			/>
			<Image
				src={bottomLeftImage}
				alt='Bottom Left Image'
				className='absolute lg:w-48 lg:h-36 w-12 h-12 bottom-0 left-0 z-0 filter dark:invert blur-sm'
			/>
			<MainHeading
				isCentered
				className={`
        max-w-5xl 
        w-full 
        mx-auto 
        lg:py-10
        z-10
        `}
				heading='Let’s talk about your project today!'>
				<CtaButton title='Book an appointment' />
			</MainHeading>
		</div>
	);
};

export default HomePageCallToAction;
