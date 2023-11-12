import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		const ageGroup = data.get('ageGroup');
		const postalCode = data.get('postalCode');
		const country = data.get('country');
		const gender = data.get('gender');
		const school = data.get('school');
		return fail(501, { email, name, ageGroup, postalCode, country, gender, school });
	}
};
