import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: StaticImageData | string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export const ResponsiveImage = ({
  src,
  alt,
  height,
  width,
  className,
}: ResponsiveImageProps) => {
  return (
    <div className={cn('relative', className)}>
      <Image
        height={height}
        width={width}
        src={src}
        alt={alt}
        priority
        className=" object-fit w-full h-auto object-center"
      />
    </div>
  );
};

export default ResponsiveImage;
