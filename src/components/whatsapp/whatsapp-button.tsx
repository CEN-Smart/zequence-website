import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { IoMdSend } from 'react-icons/io';

export const SendWhatsAppMessageButton = ({
  className,
}: {
  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={cn(
        `size-8 hover:[#19c458] transition duration-300 rounded-full bg-[#25D366]  p-1 text-white font-semibold flex items-center justify-center`,
        className,
        {
          'cursor-not-allowed': pending,
        }
      )}
    >
      <IoMdSend className="size-4 " />
    </button>
  );
};
