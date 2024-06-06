'use client';
import { cn } from '@/lib/utils';
import MainHeading from '../main-heading';

const OurApproach = () => {
	return (
		<div
			className={cn(`bg-black dark:bg-white px-3 dark:text-[#1A202C]
           text-[#F7FAFC]  flex items-center justify-center  lg:py-28 py-6`)}>
			<MainHeading
				isCentered
				className={`
        max-w-5xl 
        w-full 
        mx-auto text-balance
        lg:leading-[57.60px]
        

        `}
				heading='Unique and exceptional experiences, intelligently and sequentially crafted and delivered'
				subHeading={`Our approach is simple; sparing you
the technicalities involved, focusing
on understanding your business
challenge, midwifing your business
goals, succeeding together in
partnership.`}
			/>
		</div>
	);
};

export default OurApproach;
