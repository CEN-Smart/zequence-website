'use client';
import { BsWhatsapp } from 'react-icons/bs';
import { cn } from '@/lib/utils';

const WhatsAppTriggerButton = () => {
  return (
    <span className="p-2 relative size-10 rounded-full group bg-emerald-800 text-white transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-emerald-900 justify-center flex items-center">
      <span
        className={cn(
          'absolute size-2 top-[.2rem] right-[.1rem] bg-red-500 rounded-full border border-red-500'
        )}
      />
      <small
        className={cn(
          `text-emerald-800 dark:text-white absolute top-1/2 -translate-y-1/2 inline-block duration-300 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:-translate-x-16 text-sm font-semibold whitespace-nowrap`,
          {}
        )}
      >
        Talk to us
      </small>
      <span
        className={cn(
          'size-12 animate-ping absolute rounded-full border border-emerald-800 '
        )}
      />
      <BsWhatsapp className="size-8" />
    </span>
  );
};

export default WhatsAppTriggerButton;
