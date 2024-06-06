'use client';
import ComingSoonBadge from '@/components/ui/coming-soon-badge';
import { cn } from '@/lib/utils';
type SecondaryHeadingProps = {
  comingSoon?: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  topLabel?: string;
  highlightedText?: string;
};

const SecondaryHeading = ({
  comingSoon,
  title,
  topLabel,
  description,
  children,
  className,
  highlightedText,
}: SecondaryHeadingProps) => {
  return (
    <div className={cn(`mt-8 flex flex-col gap-3`)}>
      {comingSoon && (
        <ComingSoonBadge className="ml-0 w-fit" title="Coming soon" />
      )}
      {topLabel && (
        <span className="text-xs text-[#4A5568] font-semibold dark:text-[#CBD5E0]">
          {topLabel}
        </span>
      )}
      <h2
        className={cn(
          `text-lg font-semibold text-[#2D3748] dark:text-[#F7FAFC]`,
          className
        )}
      >
        {title}{' '}
        {highlightedText && (
          <span className=" text-zequence-primary-color">
            {highlightedText}
          </span>
        )}
      </h2>
      <p className="text-sm text-[#4A5568] dark:text-[#CBD5E0]">
        {description}
      </p>
      {children}
    </div>
  );
};

export default SecondaryHeading;
