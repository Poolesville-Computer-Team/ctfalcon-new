import prisma from '$lib/server/prisma';

export async function load() {
	const firstElement = await prisma.user.findFirst();
	if (!firstElement)
		await prisma.user.upsert({
			where: { email: 'webdev@phscomputerteam.com' },
			update: {},
			create: {
				email: 'webdev@phscomputerteam.com',
				username: 'daniel',
				password: 'password',
				token: {
					connectOrCreate: {
						where: {
							accessToken: '1'
						},
						create: {
							accessToken: '1',
							refreshToken: '1'
						}
					}
				},
				profile: {
					connectOrCreate: {
						where: { id: '1' },
						create: {
							id: '1'
						}
					}
				}
			}
		});
	return {
		username: firstElement ? firstElement.username : null
	};
}
