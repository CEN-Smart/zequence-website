'use client';
import aboutHeroImage from '/public/images/about-hero-image.png';
import SecondaryHeading from '../home-page/secondary-heading';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const HeroAbout = () => {
	return (
		<section className='bg-custom'>
			<div className={cn(`px-3 w-full container-width `)}>
				<div
					className={cn(
						` flex flex-col items-baseline md:flex-row gap-x-8 mx-auto py-20`
					)}>
					<div className='shrink-0 w-full md:w-1/2 '>
						<SecondaryHeading
							className='text-3xl  font-semibold text-[#2D3748] dark:text-[#F7FAFC] '
							title='Where technology meets empathy'
							topLabel='About us'
						/>
					</div>

					<div
						className={cn(`
          flex flex-col gap-6  text-lg text-[#4A5568] dark:text-[#CBD5E0] w-full md:w-1/2

        `)}>
						<p>
							Zequence Digital Ltd. combines strategic thinking and emerging
							technologies to provide solutions that consistently break new
							grounds. We develop long term relationships with our clients,
							delivering high quality work through our focus on bidirectional
							communication, responsive customer service, client education,
							accurate project management, product quality and ethical approach
							to business
						</p>
					</div>
				</div>
				<div className='relative -mt-14'>
					<Image
						src={aboutHeroImage}
						alt='About Hero Image'
						width={1440}
						height={800}
						priority
						className='object-cover w-full h-auto'
					/>
					<div className='absolute inset-0 bg-black/50 flex items-center justify-center'></div>
				</div>
			</div>
		</section>
	);
};

export default HeroAbout;
