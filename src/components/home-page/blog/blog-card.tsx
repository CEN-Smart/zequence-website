'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import ComingSoonBadge from '@/components/ui/coming-soon-badge';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { roboto } from '@/components/ui/fonts/fonts';

interface BlogCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
  category: string;
  comingSoon?: boolean;
  readTime: boolean | string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  href,
  category,
  comingSoon = true,
  readTime = false,
}) => {
  return (
    <Card
      className={cn(
        'w-full border border-slate-700 dark:border-white overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:z-20 bg-custom max-w-[416px] max-h-[531px]  p-0'
      )}
    >
      <CardHeader className="w-full p-0">
        <Image
          src={image}
          alt={title}
          height={300}
          width={300}
          className="object-cover w-full h-auto object-center"
          priority
        />
      </CardHeader>
      <CardContent className={cn(`flex flex-col gap-4 max-h-[231px] p-6`)}>
        <p className="flex gap-3 items-center">
          {comingSoon && <ComingSoonBadge className="-ml-1" title={category} />}

          {readTime && (
            <span
              className={cn(
                ` text-sm font-semibold leading-[21px] ${roboto.className}`
              )}
            >
              {readTime}
            </span>
          )}
        </p>
        <CardTitle
          className={` lg:text-lg font-semibold leading-[33.60px] self-stretch`}
        >
          {title}
        </CardTitle>
        <CardDescription
          className={cn(
            `leading-normal text-slate-900 dark:text-slate-300 lg:text-base self-stretch ${roboto.className}`
          )}
        >
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(
            'inline-flex items-center gap-2 group text-zequence-primary-color'
          )}
          href={href}
        >
          <span className={`leading-normal ${roboto.className}`}>
            Read more
          </span>
          <HiChevronRight
            className={cn(
              'size-6 group-hover:translate-x-1 transition duration-300 ease-in-out'
            )}
          />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
