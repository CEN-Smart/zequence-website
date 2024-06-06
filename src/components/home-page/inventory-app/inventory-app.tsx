'use client';
import { cn } from '@/lib/utils';
import SecondaryHeading from '../secondary-heading';
import inventoryImage from '/public/images/inventory-app-dashboard.png';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const InventoryApp = () => {
	return (
		<section className='bg-[#FBFAF9] dark:bg-[#1A202C]'>
			<div
				className={cn(
					` flex flex-col md:flex-row gap-x-10 container-width py-20`
				)}>
				<div className=' md:w-[700px] w-full'>
					<SecondaryHeading
						comingSoon
						className='text-3xl font-semibold text-[#2D3748] dark:text-[#F7FAFC]'
						title='Zequence Automation & Inventory App'
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
				<div className='md:w-[700px] '>
					<Image
						src={inventoryImage}
						alt='Inventory App Image'
						width={700}
						height={700}
						className='object-cover w-full h-auto object-center mt-0 md:mt-32'
					/>
				</div>
			</div>
		</section>
	);
};

export default InventoryApp;
