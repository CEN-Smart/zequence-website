'use client';

import { timelines } from '@/docs/timeline';
import { cn } from '@/lib/utils';

export default function Timeline() {
  return (
    <aside className='space-y-8'>
      {timelines.map(timeline => (
        <div key={timeline.title} className='flex gap-x-3'>
          <div
            className={cn(
              'relative after:absolute after:top-[2.8rem] after:-bottom-[1.7rem] after:start-3.5 after:w-[3px] after:-translate-x-[0.5px] after:bg-gray-900 dark:after:bg-gray-700',
              {
                'after:top-0 after:bottom-0 after:hidden':
                  timelines.at(-1) === timeline,
              }
            )}
          >
            <div>
              <timeline.icon className='size-10 text-[#2D3748]' />
            </div>
          </div>
          <div className='grow pt-0.5 pb-8'>
            <h3 className='flex gap-x-1.5 font-semibold text-gray-800 dark:text-white'>
              {timeline.title}
            </h3>
            <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
              {timeline.description}
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
}
