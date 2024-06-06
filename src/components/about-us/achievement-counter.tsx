'use client';
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type CounterProps = {
	from: number;
	to: number;
	endSymbol?: string;
	startSymbol?: string;
	description: string;
};

function AchievementCounter({
	from,
	to,
	endSymbol,
	startSymbol,
	description,
}: CounterProps) {
	const count = useMotionValue(from);
	const rounded = useTransform(count, latest => {
		return Math.round(latest);
	});
	const ref = useRef(null);
	const inView = useInView(ref);

	// while in view animate the count
	useEffect(() => {
		if (inView) {
			animate(count, to, { duration: 2 });
		}
	}, [count, inView, to]);

	return (
		<div>
			<div>
				<div className='lg:text-4xl md:text-3xl text-2xl font-bold text-orange-500'>
					{startSymbol}
					<motion.span ref={ref}>{rounded}</motion.span>
					{endSymbol}
				</div>
				<p className='text-[#718096] dark:text-[#CBD5E0]'>{description}</p>
			</div>
		</div>
	);
}

export { AchievementCounter };
