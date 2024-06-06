'use client';
import { LuHighlighter } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import ValueHighlight from '../home-page/help-summary';

const ValueHighlights = () => {
	return (
		<section className='bg-custom'>
			<div
				className={cn(
					` flex flex-col items-baseline md:flex-row gap-12 container-width pb-20`
				)}>
				<ValueHighlight
					isCentered
					Icon={LuHighlighter}
					title='Ease of business'
					description='We create solutions to make doing business easy for both businesses and customers
'
				/>
				<ValueHighlight
					isCentered
					Icon={LuHighlighter}
					title='Affordability'
					description='We are big on providing value,effective and affordable solutions for our target market '
				/>
				<ValueHighlight
					isCentered
					Icon={LuHighlighter}
					title='Service'
					description='With a quality service Delivery, we help our customers trust us as their options for first and returning customers.'
				/>

				<ValueHighlight
					isCentered
					Icon={LuHighlighter}
					title='Excellence'
					description='
We are intentional about service quality and for us excellence is not an accident, neither is a destination, but a pursuit to having the best of service obtainable.'
				/>
			</div>
		</section>
	);
};

export default ValueHighlights;
