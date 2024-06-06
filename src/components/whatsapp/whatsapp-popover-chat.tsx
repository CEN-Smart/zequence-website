'use client';
import { IoIosClose } from 'react-icons/io';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import WhatsAppTriggerButton from './whatsapp-trigger-button';
import { useFormState } from 'react-dom';
import { sendWhatsAppMessage } from '../contact-us/form/actions/send-whatsapp-message';
import { SendWhatsAppInput } from './whatsapp-input-field';
import { SendWhatsAppMessageButton } from './whatsapp-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { FormResponse } from '../contact-us/form/form-response';

export function WhatsAppPopoverChat() {
	const [formState, formAction] = useFormState(sendWhatsAppMessage, {
		errors: {},
		success: false,
	});

	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(open => !open);
	};

	return (
		<section
			className={`
    fixed z-50 top-1/2 right-3 -translate-y-1/2
    `}>
			<Popover
				open={open}
				onOpenChange={toggleOpen}>
				<PopoverTrigger>
					<WhatsAppTriggerButton />
				</PopoverTrigger>
				<PopoverContent
					side='top'
					className='w-96 p-0 overflow-hidden rounded-2xl shadow-lg bg-white border border-none'>
					<form action={formAction}>
						<div className='bg-[#008069] h-24 p-2 relative flex items-center gap-3'>
							<IoIosClose
								onClick={() => setOpen(false)}
								className='absolute top-1 right-1 cursor-pointer size-6 text-white/55'
							/>
							<span
								className={cn(
									'absolute size-2 top-14 left-12 bg-[#4AD504] rounded-full border z-50 border-[#4AD504]'
								)}
							/>
							<Avatar className='size-12 '>
								<AvatarImage
									src=''
									alt='ZDL'
								/>
								<AvatarFallback>ZDL</AvatarFallback>
							</Avatar>
							<p className='flex flex-col text-white gap-1'>
								<strong className=' tracking-wide'>
									Zequence Digital Limited
								</strong>
								<span className='text-xs'>Online</span>
							</p>
							<FormResponse
								message={formState.errors.formError?.join(', ')}
								type='error'
							/>
						</div>
						<div className='bg-[#EEE7E0] pt-4 pb-10 px-8 shadow-inner'>
							<div className='bubble text-xs flex flex-col gap-2'>
								<span>Hi there! 👋</span>
								<span>
									How can we help you today?
									<small className='ml-1'>
										{new Date().toLocaleTimeString('en-US', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}
									</small>
								</span>
							</div>
						</div>
						<div className='relative p-2'>
							<SendWhatsAppInput
								id='whatsAppMessage'
								name='whatsAppMessage'
								placeholder='Type your message'
								formState={formState}
							/>
							<SendWhatsAppMessageButton className=' absolute top-1/2 right-4 -translate-y-1/2' />
						</div>
					</form>
				</PopoverContent>
			</Popover>
		</section>
	);
}
