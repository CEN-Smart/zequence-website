import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

type FormResponseProps = {
  message?: string;
  type: 'success' | 'error';
};

export const FormResponse = ({ message, type }: FormResponseProps) => {
  if (!message) return null;

  return (
    <div
      className={cn(
        'bg-emerald-600 p-3 rounded-md flex items-center gap-x-2 text-sm text-white',
        {
          'bg-destructive/15 text-destructive': type === 'error',
        }
      )}
    >
      {type === 'success' ? (
        <CheckCircledIcon className="size-4" />
      ) : (
        <ExclamationTriangleIcon className="size-4" />
      )}
      <p>{message}</p>
    </div>
  );
};
