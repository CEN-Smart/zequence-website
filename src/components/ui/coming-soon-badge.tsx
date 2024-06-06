'use client';
import { cn } from '@/lib/utils';
import { roboto } from './fonts/fonts';

interface ComingSoonBadgeProps {
  title: string;
  className?: string;
}
const ComingSoonBadge = ({ title, className }: ComingSoonBadgeProps) => {
  return (
    <span
      className={cn(
        `inline-flex items-center rounded-md bg-blue-50 px-2 text-[0.7rem] font-medium text-[#1D4ED8] ring-1 ring-inset ring-blue-700/10 ml-2 ${roboto.className}`,
        className
      )}
    >
      {title}
    </span>
  );
};

export default ComingSoonBadge;
