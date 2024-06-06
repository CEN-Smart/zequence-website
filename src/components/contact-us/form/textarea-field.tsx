'use client';
import { useFormStatus } from 'react-dom';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { InputFieldProps as TextareaFieldProps } from './input-field';
import { cn } from '@/lib/utils';

export function TextareaField({
  label,
  id,
  name,
  placeholder,
  className,
  formState,
}: TextareaFieldProps) {
  const { pending } = useFormStatus();
  return (
    <div className={cn(`grid w-full gap-1.5`, className)}>
      <Label
        className={cn(``, {
          'text-destructive':
            formState?.errors[name as keyof typeof formState.errors],
        })}
        htmlFor={id}
      >
        {label}
      </Label>
      <Textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={cn(
          `h-32  shadow border border-gray-300 justify-start items-center gap-2 inline-flex
            w-full
            px-4
            py-2
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
      />
      {formState?.errors[name as keyof typeof formState.errors] && (
        <p className="text-sm text-destructive">
          {formState.errors[name as keyof typeof formState.errors]}
        </p>
      )}
    </div>
  );
}
