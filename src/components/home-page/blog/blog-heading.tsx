'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import CtaButton from '@/components/header/components/buttons/cta-button';

interface BlogHeadingProps {
	heading: string;
	title: string;
	children?: React.ReactNode;
}
const BlogHeading = ({ heading, title, children }: BlogHeadingProps) => {
	return (
		<section className={cn('container-width pb-10 pt-32')}>
			<div
				className={cn(
					'flex justify-between lg:flex-row flex-col lg:items-center items-start gap-4 lg:gap-0'
				)}>
				<div className='flex flex-col gap-2'>
					<h1 className='font-semibold text-lg'>{heading}</h1>
					<h2 className={cn('md:text-3xl text-2xl font-semibold lg:w-[500px]')}>
						{title}
					</h2>
				</div>
				<Link href='/blog'>
					<CtaButton
						border
						title='View all'
					/>
				</Link>
			</div>
			<div
				className={cn(
					'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'
				)}>
				{children}
			</div>
		</section>
	);
};

export default BlogHeading;
