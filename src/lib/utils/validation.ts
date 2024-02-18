export const validateEmail = (email: string) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return emailRegex.test(email);
};

export const validateUsername = (username: string) => {
	const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
	return usernameRegex.test(username);
};

export const validateName = (name: string) => {
	const nameRegex = /^[a-zA-Z ]*$/;
	return nameRegex.test(name);
};

export const validateAgeGroup = (ageGroup: string) => {
	const ageGroupRegex = /^(under18|over18)$/;
	return ageGroupRegex.test(ageGroup);
};

export const validateGender = (gender: string) => {
	const genderRegex = /^(male|female|nonBinaryGenderFluid|notListedPreferNotToAnswer)$/;
	return genderRegex.test(gender);
};
