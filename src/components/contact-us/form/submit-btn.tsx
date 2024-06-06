'use client';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={cn(
        `w-full
                bg-zequence-primary-color
                text-white
                font-bold
                py-5
                rounded-lg
                transition
                duration-300
                ease-in-out
                hover:bg-zequence-primary-color/90
                focus:outline-none
                focus:ring-2
                focus:ring-zequence-primary-color/50
                focus:ring-offset-2
                focus:ring-offset-white
                focus:ring-offset-opacity-50
                disabled:bg-gray-200
                disabled:text-gray-400
                disabled:cursor-not-allowed
                disabled:hover:bg-gray-200
                disabled:focus:ring-2
                disabled:focus:ring-gray-200
                disabled:focus:ring-offset-2
                disabled:focus:ring-offset-white
                disabled:focus:ring-offset-opacity-50
                `,
        {
          'cursor-not-allowed': pending,
        }
      )}
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Get in touch'}
    </Button>
  );
};
