'use server';
import { redirect } from 'next/navigation';
import { SendWhatsAppMessageSchema } from './../../schema/send-whatsapp-message';
import axios from 'axios';

export interface SendWhatsAppMessageState {
	errors: {
		whatsAppMessage?: string[];
		formError?: string[];
	};
	success: boolean;
}

// https://api.whatsapp.com/send/?phone=14081234567&text=hi&type=phone_number&app_absent=0

export const sendWhatsAppMessage = async (
	formState: SendWhatsAppMessageState,
	formData: FormData
): Promise<SendWhatsAppMessageState> => {
	const result = SendWhatsAppMessageSchema.safeParse({
		whatsAppMessage: formData.get('whatsAppMessage') as string,
	});

	try {
		// If validation fails, return the errors
		if (!result.success) {
			return {
				errors: result.error.flatten().fieldErrors,
				success: false,
			};
		}
		return {
			errors: {},
			success: true,
		};
	} catch (error) {
		return {
			errors: {
				formError: [
					'An error occurred while sending the message. Please try again later.',
				],
			},
			success: false,
		};
	} finally {
		redirect(
			`https://api.whatsapp.com/send/?phone=+2347070963692&text=${result?.data?.whatsAppMessage}&type=phone_number&app_absent=0`
		);
	}
};
