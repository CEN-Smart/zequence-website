'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useReducer } from 'react';
import { useFormStatus } from 'react-dom';
import { ContactUsFormState } from './actions/contact-us-action';

export type InputFieldProps = {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  className?: string;
  formState: ContactUsFormState;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  formState,
  className,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={cn(`flex flex-col gap-2`, className)}>
      <Label
        className={cn(``, {
          'text-destructive':
            formState?.errors[name as keyof typeof formState.errors],
        })}
        htmlFor={id}
      >
        {label}
      </Label>
      <div className={cn(`relative`)}>
        <Input
          className={cn(
            `
            w-full
            px-4
            py-5
            border
            border-gray-300
            rounded-lg
            focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:border-gray-300
      `,
            {
              'cursor-not-allowed': pending,
              'border-destructive focus-visible:ring-transparent':
                formState?.errors[name as keyof typeof formState.errors],
            }
          )}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <span
        className={cn(`
                text-sm
                text-destructive
        `)}
      >
        {formState?.errors[name as keyof typeof formState.errors]?.join(', ') ||
          null}
      </span>
    </div>
  );
};
