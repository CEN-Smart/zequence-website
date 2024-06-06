import * as z from 'zod';

export const SendWhatsAppMessageSchema = z.object({
  whatsAppMessage: z.string().trim().min(1, 'Message is required'),
});
