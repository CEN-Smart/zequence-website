'use client';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

import * as React from 'react';

import * as RPNInput from 'react-phone-number-input';

import flags from 'react-phone-number-input/flags';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Input, InputProps } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContactUsFormState } from './actions/contact-us-action';

type PhoneInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value'
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
		onChange?: (value: RPNInput.Value) => void;
		formState?: ContactUsFormState;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, ...props }, ref) => {
			return (
				<RPNInput.default
					ref={ref}
					className={cn('flex', className)}
					flagComponent={FlagComponent}
					countrySelectComponent={CountrySelect}
					inputComponent={InputComponent}
					/**
					 * Handles the onChange event.
					 *
					 * react-phone-number-input might trigger the onChange event as undefined
					 * when a valid phone number is not entered. To prevent this,
					 * the value is coerced to an empty string.
					 *
					 * @param {E164Number | undefined} value - The entered value
					 */
					onChange={(value: RPNInput.Value) => {
						onChange?.(value);
					}}
					{...props}
				/>
			);
		}
	);
PhoneInput.displayName = 'PhoneInput';

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<Input
			className={cn(
				`rounded-e-lg rounded-s-none py-5
            border
            border-gray-300
            focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:border-gray-300`,
				className,
				{
					'border-destructive focus-visible:ring-transparent':
						props.formState?.errors[
							props.name as keyof typeof props.formState.errors
						],
				}
			)}
			{...props}
			ref={ref}
		/>
	)
);
InputComponent.displayName = 'InputComponent';

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	onChange: (value: RPNInput.Country) => void;
	options: CountrySelectOption[];
};

const CountrySelect = ({
	disabled,
	value,
	onChange,
	options,
}: CountrySelectProps) => {
	const handleSelect = React.useCallback(
		(country: RPNInput.Country) => {
			onChange(country);
		},
		[onChange]
	);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type='button'
					variant={'outline'}
					className={cn(
						'flex gap-1 rounded-e-none bg-custom py-5 rounded-s-lg px-3'
					)}
					disabled={disabled}>
					<FlagComponent
						country={value}
						countryName={value}
					/>
					<ChevronDownIcon
						className={cn(
							'-mr-2 size-4 opacity-50',
							disabled ? 'hidden' : 'opacity-100'
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[300px] p-0'>
				<Command>
					<CommandList>
						<ScrollArea className='h-72'>
							<CommandInput placeholder='Search country...' />
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{options
									.filter(x => x.value)
									.map(option => (
										<CommandItem
											className='gap-2'
											key={option.value}
											onSelect={() => handleSelect(option.value)}>
											<FlagComponent
												country={option.value}
												countryName={option.label}
											/>
											<span className='flex-1 text-sm'>{option.label}</span>
											{option.value && (
												<span className='text-foreground/50 text-sm'>
													{`+${RPNInput.getCountryCallingCode(option.value)}`}
												</span>
											)}
											<CheckIcon
												className={cn(
													'ml-auto size-4',
													option.value === value ? 'opacity-100' : 'opacity-0'
												)}
											/>
										</CommandItem>
									))}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className='bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm'>
			{Flag && <Flag title={countryName} />}
		</span>
	);
};
FlagComponent.displayName = 'FlagComponent';

export { PhoneInput };
