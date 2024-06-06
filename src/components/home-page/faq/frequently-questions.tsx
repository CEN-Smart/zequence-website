'use client';
import CtaButton from '@/components/header/components/buttons/cta-button';
import SecondaryHeading from '../secondary-heading';
import { cn } from '@/lib/utils';
import { FaqAccordion } from './faq-accordion';

const FrequentlyQuestions = () => {
	return (
		<section className='bg-custom'>
			<div
				className={cn(
					`flex md:flex-row items-baseline flex-col gap-8 container-width py-20`
				)}>
				<div className=' md:w-[700px] w-full mt-0'>
					<SecondaryHeading
						className='text-3xl font-semibold text-[#2D3748] dark:text-[#F7FAFC]'
						title='Frequently Asked Questions'
						description="Find answers to common inquiries to gain clarity and insights into our services, processes, and offerings.
Have a question that's not covered? Reach out to us for personalized assistance.">
						<CtaButton
							border
							title='Contact us'
							className='w-fit'
						/>
					</SecondaryHeading>
				</div>
				<FaqAccordion />
			</div>
		</section>
	);
};

export default FrequentlyQuestions;
