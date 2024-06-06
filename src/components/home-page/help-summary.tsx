'use client';

import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface HelpSummaryProps {
  title: string;
  description: string;
  className?: string;
  Icon?: IconType;
  isCentered?: boolean;
}

const HelpSummary = ({
  title,
  description,
  className,
  Icon,
  isCentered,
}: HelpSummaryProps) => {
  return (
    <div
      className={cn(`flex flex-col gap-3`, className, {
        'w-full justify-center items-center': isCentered,
      })}
    >
      {Icon && <Icon className="text-blue-500" />}
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-[#2D3748] dark:text-[#F7FAFC]">
          {title}
        </h2>
      </div>
      <p
        className={cn(`text-sm text-[#4A5568] dark:text-[#CBD5E0]`, {
          'text-center': isCentered,
        })}
      >
        {description}
      </p>
    </div>
  );
};

export default HelpSummary;
