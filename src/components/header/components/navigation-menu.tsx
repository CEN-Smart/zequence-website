'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { resources } from '@/docs/resources';
import { company } from '@/docs/company';
import { products } from '@/docs/products';
import NavigationLink from './navigation-link';
import { cn } from '@/lib/utils';

export const ShiftingDropDown = () => {
	return (
		<div className='flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center'>
			<Tabs />
		</div>
	);
};

const Tabs = () => {
	const [selected, setSelected] = useState<number | null>(null);
	const [dir, setDir] = useState<null | 'r' | 'l'>(null);

	const handleSetSelected = (val: number | null) => {
		if (typeof selected === 'number' && typeof val === 'number') {
			setDir(selected > val ? 'r' : 'l');
		} else if (val === null) {
			setDir(null);
		}

		setSelected(val);
	};

	return (
		<div
			onMouseLeave={() => handleSetSelected(null)}
			className='relative flex h-fit gap-2'>
			{TABS.map(t => {
				return (
					<Tab
						key={t.id}
						selected={selected}
						handleSetSelected={handleSetSelected}
						tab={t.id}>
						{t.title}
					</Tab>
				);
			})}

			<AnimatePresence>
				{selected && (
					<Content
						dir={dir}
						selected={selected}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

const Tab = ({
	children,
	tab,
	handleSetSelected,
	selected,
}: {
	children: React.ReactNode;
	tab: number;
	handleSetSelected: (val: number) => void;
	selected: number | null;
}) => {
	return (
		<button
			id={`shift-tab-${tab}`}
			onMouseEnter={() => handleSetSelected(tab)}
			onClick={() => handleSetSelected(tab)}
			className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
				selected === tab
					? ' text-zequence-primary-color/90'
					: 'text-sm font-medium'
			}`}>
			<span>{children}</span>
			<FiChevronDown
				className={`transition-transform ${
					selected === tab ? 'rotate-180' : ''
				}`}
			/>
		</button>
	);
};

const Content = ({
	selected,
	dir,
}: {
	selected: number;
	dir: 'r' | 'l' | null;
}) => {
	return (
		<motion.div
			id='overlay-content'
			initial={{
				opacity: 0,
				y: 8,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			exit={{
				opacity: 0,
				y: 8,
			}}
			className={cn(
				`absolute left-0 top-12 w-fit rounded-lg border border-[#334155] p-4 bg-[#FBFAF9] `,
				{
					'left-48 w-fit': selected === TABS.length,
				}
			)}>
			<Bridge />
			<Nub selected={selected} />

			{TABS.map(t => {
				return (
					<div
						className='overflow-hidden'
						key={t.id}>
						{selected === t.id && (
							<motion.div
								initial={{
									opacity: 0,
									x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.25, ease: 'easeInOut' }}>
								<t.component />
							</motion.div>
						)}
					</div>
				);
			})}
		</motion.div>
	);
};

const Bridge = () => (
	<div className='absolute -top-[24px] left-0 right-0 h-[24px]' />
);

const Nub = ({ selected }: { selected: number }) => {
	const [left, setLeft] = useState(0);

	let moveNub = useCallback(() => {
		if (selected) {
			const hoveredTab = document.getElementById(`shift-tab-${selected}`);
			const overlayContent = document.getElementById('overlay-content');

			if (!hoveredTab || !overlayContent) return;

			const tabRect = hoveredTab.getBoundingClientRect();
			const { left: contentLeft } = overlayContent.getBoundingClientRect();

			const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

			setLeft(tabCenter);
		}
	}, [selected]);

	useEffect(() => {
		moveNub();
	}, [selected, moveNub]);

	return (
		<motion.span
			style={{
				clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
			}}
			animate={{ left }}
			transition={{ duration: 0.25, ease: 'easeInOut' }}
			className={cn(
				`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-50`,
				{}
			)}
		/>
	);
};

const Products = () => {
	return (
		<div className='flex flex-col gap-4'>
			{products.map(r => (
				<NavigationLink
					key={r.title}
					navigationlink={r}
				/>
			))}
		</div>
	);
};

const Resources = () => {
	return (
		<div className='flex flex-col gap-4'>
			{resources.map(r => (
				<NavigationLink
					key={r.title}
					navigationlink={r}
				/>
			))}
		</div>
	);
};

const Company = () => {
	return (
		<div className='flex flex-col gap-4'>
			{company.map(r => (
				<NavigationLink
					key={r.title}
					navigationlink={r}
				/>
			))}
		</div>
	);
};

const TABS = [
	{
		title: 'Products',
		component: Products,
	},
	{
		title: 'Resources',
		component: Resources,
	},
	{
		title: 'Company',
		component: Company,
	},
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default Tabs;
