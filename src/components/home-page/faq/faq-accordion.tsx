import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { faqs } from '@/docs/faqs';
import { cn } from '@/lib/utils';
export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full px-1">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={faq.answer}
          className={cn(``, {
            'border-b border-black dark:border-white': i === faqs.length - 1,
          })}
        >
          <AccordionTrigger
            className={cn(
              `hover:no-underline border-black dark:border-white font-semibold border-t text-xs whitespace-nowrap text-left`,
              {
                'border-b-0': i === faqs.length - 1,
              }
            )}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-xs">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
