'use server';
import axios from 'axios';

import { ContactUsSchema } from '../../schema/contact-us';

export interface ContactUsFormState {
	errors: {
		name?: string[];
		email?: string[];
		phone?: string[];
		message?: string[];
		formError?: string[];
	};
	success: boolean;
	message: string;
}

const axiosInstance = axios.create({
	baseURL: 'https://www.zequencedigital.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const contactUsFormAction = async (
	formState: ContactUsFormState,
	formData: FormData
): Promise<ContactUsFormState> => {
	const result = ContactUsSchema.safeParse({
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
		message: formData.get('message') as string,
	});

	// If validation fails, return the errors
	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors,
			success: false,
			message: '',
		};
	}

	// Call API to post the form data

	try {
		await axiosInstance.post(`/users`, result.data);

		return {
			errors: {},
			success: true,
			message: 'Your message has been sent successfully.',
		};
	} catch (error) {
		return {
			errors: {
				formError: ['An error occurred. Please try again later.'],
			},
			success: false,
			message: '',
		};
	}
};
