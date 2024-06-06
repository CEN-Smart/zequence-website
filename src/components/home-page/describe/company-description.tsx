'use client';
import SecondaryHeading from '../secondary-heading';
import HelpSummary from '../help-summary';
import { cn } from '@/lib/utils';
import { FaHandsHelping } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { MdWebAsset } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import CtaButton from '@/components/header/components/buttons/cta-button';

const CompanyDescription = () => {
	return (
		<section className='bg-[#FBFAF9] dark:bg-[#1A202C]'>
			<div
				className={cn(
					` flex flex-col items-baseline md:flex-row gap-8 container-width pb-20 bg-[#FBFAF9] dark:bg-[#1A202C]`
				)}>
				<SecondaryHeading
					className='text-3xl font-semibold text-[#2D3748] dark:text-[#F7FAFC] leading-[57.60px] lg:w-[380px] w-full'
					title='How we can help you?'
					description='Our solutions streamline operations, enhance efficiency, and drive growth for your business.'>
					<CtaButton
						border
						title='Book an appointment'
						className='w-fit'
					/>
				</SecondaryHeading>
				<section
					className={cn(`
                grid 
                grid-cols-1 
                lg:grid-cols-2 
                gap-x-6 
                gap-y-12
                mt-4
        `)}>
					<HelpSummary
						Icon={MdWeb}
						title='Software consultation'
						description='Get expert technology and business consultation from our team to make informed decisions, maximize the value of your IT investments, and tailor solutions to meet your unique business goals.'
					/>
					<HelpSummary
						Icon={FaHandsHelping}
						title='UX/UI design'
						description='Improve user experience and interface design with our expert team, ensuring engaging, and user-friendly digital products by creating pixel-perfect, and easy-to-use designs that delight your end users.'
					/>
					<HelpSummary
						Icon={MdWebAsset}
						title='Customer software development'
						description='Develop user-centric, intuitive, secure, and scalable solutions for a variety of platforms, backed by robust systems to enhance both functionality and user experience.'
					/>
					<HelpSummary
						Icon={MdSearch}
						title='Dedicated teams'
						description='Our team is committed to exceeding your expectations through strategic brainstorming sessions, and analyzing today’s business and customer needs to develop effective, user-friendly, and budget-friendly solutions.'
					/>
				</section>
			</div>
		</section>
	);
};

export default CompanyDescription;
