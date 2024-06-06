'use client';
import SecondaryHeading from '../home-page/secondary-heading';
import Image from 'next/image';
import { AchievementCounter } from './achievement-counter';
import { cn } from '@/lib/utils';
import zequenceImage from '/public/images/about-highlight-image.png';

const Achievement = () => {
	return (
		<section className='bg-custom'>
			<div
				className={cn(
					` flex flex-col md:flex-row items-center gap-x-10 container-width py-20`
				)}>
				<div className=' md:w-[700px] w-full'>
					<SecondaryHeading
						className='text-3xl font-semibold text-[#2D3748] dark:text-[#F7FAFC]'
						title='Our numbers speak for us'
						description='We are passionate about creating solutions for the everyday user, small businesses and financial institutions to improve service delivery and user experience.'>
						<div className='grid grid-cols-2 gap-10 mt-10'>
							<AchievementCounter
								endSymbol='+'
								description='Years of combined experiences'
								from={0}
								to={30}
							/>
							<AchievementCounter
								endSymbol='%'
								description='Customer’s satisfaction rate'
								from={0}
								to={100}
							/>
							<AchievementCounter
								description='Countries in operation'
								from={0}
								to={2}
							/>
							<AchievementCounter
								endSymbol='+'
								description='Products'
								from={0}
								to={6}
							/>
						</div>
					</SecondaryHeading>
				</div>
				<div className='flex-1'>
					<Image
						src={zequenceImage}
						alt='About Highlight Image'
						width={616}
						height={468}
						priority
						className='object-cover w-full h-auto object-center mt-20'
					/>
				</div>
			</div>
		</section>
	);
};

export default Achievement;
