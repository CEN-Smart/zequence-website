'use client';

import { cn } from '@/lib/utils';

type MainHeadingProps = {
	heading: string;
	subHeading?: string;
	isCentered?: boolean;
	children?: React.ReactNode;
	headerLabel?: string;
	className?: string;
};
export default function MainHeading({
	heading,
	subHeading,
	isCentered,
	children,
	headerLabel,
	className,
}: MainHeadingProps) {
	return (
		<div
			className={cn(
				'',
				{
					'text-center': isCentered,
				},
				className
			)}>
			<div className=''>
				{headerLabel && (
					<h2
						className={cn(`
          text-[#2D3748] 
          dark:text-[#F7FAFC] 
          text-lg 
          font-semibold
          pb-3
          `)}>
						{headerLabel}
					</h2>
				)}
				<h1
					className={cn(`
        lg:text-5xl 
        md:text-3xl 
        text-2xl 
        font-bold lg:leading-[1.2]
        pb-4
        `)}>
					{heading}
				</h1>
				<p
					className={cn`
        lg:text-lg text-md
        `}>
					{subHeading}
				</p>
				<div
					className={cn('mt-8 flex space-x-4', {
						'flex justify-center': isCentered,
					})}>
					{children}
				</div>
			</div>
		</div>
	);
}
