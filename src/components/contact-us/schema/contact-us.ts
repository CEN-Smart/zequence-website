import * as z from 'zod';

// Define the schema for the contact us form
// Name is required and must be a string
// Email is required and must be a valid email
// Phone is a required string that must be a valid phone number and must start with a + followed by a country code
// Message is a required string

export const ContactUsSchema = z.object({
	name: z.string().trim().min(1, { message: 'Name is required' }),
	email: z
		.string({
			message: 'Email is required',
		})
		.trim()
		.email({
			message: 'Please enter a valid email address',
		})
		.toLowerCase(),
	//  phone is a required string that must be a valid phone number and must start with a + followed by a country code
	phone: z.string().refine(
		value => {
			return /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/.test(value);
		},
		{ message: 'Please enter a valid phone number' }
	),
	// message is optional
	message: z.string().optional(),
});
