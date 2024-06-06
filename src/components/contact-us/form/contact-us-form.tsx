'use client';
import { useFormState } from 'react-dom';
import { cn } from '@/lib/utils';
import { SubmitButton } from './submit-btn';
import { contactUsFormAction } from './actions/contact-us-action';
import { useEffect, useRef, useState } from 'react';
import { InputField } from './input-field';
import {
	Country,
	formatPhoneNumber,
	formatPhoneNumberIntl,
	getCountryCallingCode,
} from 'react-phone-number-input';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { TextareaField } from './textarea-field';
import { PhoneInput } from './phone-input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { FormResponse } from './form-response';
import toast from 'react-hot-toast';

export const ContactUsForm = () => {
	const [formState, formAction] = useFormState(contactUsFormAction, {
		errors: {},
		success: false,
		message: '',
	});
	const formRef = useRef<HTMLFormElement>(null);

	const [country, setCountry] = useState<Country>();
	const [phoneNumber, setPhoneNumber] = useState('');
	// reset the form after submission
	useEffect(() => {
		if (formState.success) {
			formRef?.current?.reset();
			setPhoneNumber('');
			toast(formState.message, {
				icon: formState.success ? '🚀' : '🤯',
				style: {
					borderRadius: '10px',
					background: formState.success ? 'green' : 'red',
					color: 'white',
				},
				position: 'bottom-center',
			});
		}
	}, [formState.message, formState.success]);

	return (
		<Card
			className={cn(
				`shadow-none bg-transparent border-none rounded-none pt-24 pb-20`
			)}>
			<CardHeader className='flex flex-col p-0 gap-4 '>
				<CardTitle className='lg:text-3xl text-2xl'>
					Let&apos;s level up your brand, together
				</CardTitle>
				<CardDescription className=' pb-9 text-md'>
					Your can reach out to us by filling the form below or sending us an
					email via {` `}
					<Link
						href='mailto:sales@zequencedigital.com'
						className=' text-zequence-primary-color hover:text-zequence-primary-color-dark transition-colors duration-300 ease-in-out'>
						sales@zequencedigital.com
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent className='p-0'>
				<form
					ref={formRef}
					action={formAction}
					className='space-y-6'>
					<InputField
						label='Name'
						type='text'
						id='name'
						name='name'
						placeholder='Your Name'
						formState={formState}
					/>
					<InputField
						label='Email'
						type='email'
						id='email'
						name='email'
						placeholder='you@example.com'
						formState={formState}
					/>
					<div>
						<Label
							className={cn(``, {
								'text-destructive': formState?.errors.phone,
							})}
							htmlFor='phone'>
							Phone
						</Label>
						<PhoneInput
							formState={formState}
							id='phone'
							name='phone'
							placeholder='+234 123 456 7890'
							value={phoneNumber}
							defaultCountry='NG'
							onChange={setPhoneNumber}
							onCountryChange={setCountry}
							className={cn(
								`
              `,
								{
									'border-destructive focus-visible:ring-transparent':
										formState?.errors.phone,
								}
							)}
						/>
						{formState?.errors.phone && (
							<p className='text-sm text-destructive'>
								{formState.errors.phone}
							</p>
						)}
					</div>
					<TextareaField
						label='Message'
						id='message'
						name='message'
						placeholder='Your Message'
						formState={formState}
					/>
					<FormResponse
						message={formState.errors.formError?.join(', ')}
						type='error'
					/>
					<SubmitButton />
				</form>
			</CardContent>
		</Card>
	);
};
