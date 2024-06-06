'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
type CtaButtonProps = {
  title: string;
  border?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function CtaButton({
  title,
  border = false,
  className = '',
  onClick,
}: CtaButtonProps) {
  return (
    <Button
      className={cn(
        ' rounded-[4px] text-sm font-medium',
        {
          ' bg-zequence-primary-color transition duration-300 hover:bg-zequence-primary-color/90':
            !border,
          'border border-zequence-secondary-color transition duration-300 hover:bg-gray-50 bg-white text-zequence-secondary-color':
            border,
        },
        className
      )}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
