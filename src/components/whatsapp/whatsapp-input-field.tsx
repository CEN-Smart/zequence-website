import { useFormStatus } from 'react-dom';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { SendWhatsAppMessageState } from '../contact-us/form/actions/send-whatsapp-message';

type SendWhatsAppInputProps = {
	formState: SendWhatsAppMessageState;
	type?: string;
	id: string;
	name: string;
	placeholder: string;
	className?: string;
};

export const SendWhatsAppInput = ({
	formState,
	type,
	id,
	name,
	placeholder,
	className,
}: SendWhatsAppInputProps) => {
	const { pending } = useFormStatus();
	return (
		<div>
			<Input
				name={name}
				placeholder={placeholder}
				id={id}
				type={type}
				disabled={pending}
				className={cn(
					`
          text-[#1A202C]
            w-full
            px-4
            py-5
            border
           border-none
           outline-none
           shadow-none
           focus:border-none
            focus:ring-0
            focus:ring-transparent
            focus:ring-offset-transparent
            focus:ring-offset-0
            focus:outline-none
            focus:shadow-none
            focus:border-transparent
            focus:border-0
            active:border-none
            active:outline-none
            active:ring-0
            active:ring-offset-0
      `,
					className,
					{
						'cursor-not-allowed': pending,
						'border-destructive focus-visible:ring-transparent':
							formState?.errors[name as keyof typeof formState.errors],
					}
				)}
			/>
			{formState?.errors[name as keyof typeof formState.errors] && (
				<div className='text-destructive text-xs mt-1'>
					{formState.errors[name as keyof typeof formState.errors]?.join(', ')}
				</div>
			)}
		</div>
	);
};
