import { lucia } from '$lib/server/auth.js';
import prisma from '$lib/server/prisma.js';
import {
	validateAgeGroup,
	validateEmail,
	validateGender,
	validateName,
	validateUsername
} from '$lib/utils/validation.js';
import type { AgeGroup, Gender } from '@prisma/client';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email') as string;
		const username = data.get('username') as string;
		const name = data.get('name') as string;
		const ageGroup = data.get('ageGroup') as AgeGroup;
		const postalCode = data.get('postalCode') as string;
		const country = data.get('country') as string;
		const gender = data.get('gender') as Gender;
		const school = data.get('school') as string;
		const dataToReturn = { email, name, username, ageGroup, postalCode, country, gender, school };
		const password = data.get('password') as string;
		const confirmPassword = data.get('confirmPassword') as string;

		if (!email || !username || !name || !ageGroup || !postalCode || !country || !gender)
			return fail(400, { ...dataToReturn, message: 'All required fields are required' });
		if (!validateEmail(email)) return fail(400, { ...dataToReturn, message: 'Email is invalid' });
		if (password !== confirmPassword)
			return fail(400, { ...dataToReturn, message: 'Passwords do not match' });
		if (!validateUsername(username))
			return fail(400, { ...dataToReturn, message: 'Username is invalid' });
		if (!validateName(name)) return fail(400, { ...dataToReturn, message: 'Name is invalid' });
		if (!validateAgeGroup(ageGroup))
			return fail(400, { ...dataToReturn, message: 'Age group is invalid' });
		if (!validateGender(gender)) return fail(400, { ...dataToReturn, message: 'Gender is valid' });
		const saltRounds = 10;
		const hashedPassword = bcrypt.hashSync(password, saltRounds);

		try {
			if (await prisma.user.findUnique({ where: { email } }))
				return fail(400, { ...dataToReturn, message: 'Email is already in use' });
			if (await prisma.user.findUnique({ where: { username } }))
				return fail(400, { ...dataToReturn, message: 'Username is already in use' });
			const user = await prisma.user.create({
				data: {
					email,
					username,
					hashed_password: hashedPassword,
					profile: {
						create: {
							ageGroup,
							postalCode,
							country,
							gender
						}
					}
				}
			});
			const session = await lucia.createSession(user.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
			redirect(300, '/dashboard');
			return { success: true };
		} catch (e) {
			console.error(e);
			return fail(500, { ...dataToReturn, message: 'An error has occurred' });
		}
	}
};
