import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import zequenceLogo from '/public/images/logo.png';
import { size } from '../../../app/icon';
export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block relative shrink-0 h-[37.57px] w-[142px]"
    >
      <Image
        src={zequenceLogo}
        fill
        priority
        alt="Zequence Logo"
        className={cn(' object-cover')}
        sizes="(max-width: 640px) 100vw, 142px"
      />
    </Link>
  );
}
