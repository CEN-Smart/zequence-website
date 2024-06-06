'use client';
import { cn } from '@/lib/utils';
import zequencePayImage from '/public/images/zequence-pay-image.jpg';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import SecondaryHeading from '../secondary-heading';
import Image from 'next/image';

const ZequencePay = () => {
	return (
		<section className='bg-custom'>
			<div
				className={cn(
					` flex flex-col md:flex-row gap-x-10 container-width lg:py-20`
				)}>
				<div className=' md:w-[700px] w-full'>
					<SecondaryHeading
						comingSoon
						className='text-3xl font-semibold text-[#2D3748] dark:text-[#F7FAFC]'
						title='Zequence Pay'
						description='We are a digital agency that specializes in web development, web design, and digital marketing. We help businesses grow their online presence and increase their revenue. Contact us today to learn more.'>
						<Link
							href='/inventory-app'
							className={cn(`flex items-center gap-2 text-zequence-primary-color
                    dark:text-zequence-dark-primary-color
                    hover:text-zequence-primary-light-color
                    dark:hover:text-zequence-dark-primary-light-color
                    transition-colors
                    duration-300
                    ease-in-out
                    pb-5
                    
          `)}>
							<span>Learn more</span>
							<HiChevronRight />
						</Link>
					</SecondaryHeading>
				</div>
				<div className='md:w-[700px]'>
					<Image
						src={zequencePayImage}
						alt='Zequence Pay Image'
						width={700}
						height={700}
						className='object-cover w-full h-auto object-center mt-0 md:mt-32'
					/>
				</div>
			</div>
		</section>
	);
};

export default ZequencePay;
