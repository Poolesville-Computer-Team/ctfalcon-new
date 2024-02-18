import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const daniel = await prisma.user.upsert({
		where: { email: 'webdev@phscomputerteam.com' },
		update: {},
		create: {
			email: 'webdev@phscomputerteam.com',
			username: 'daniel',
			profile: {
				create: {
					ageGroup: 'over18',
					postalCode: '12345',
					school: 'Poolesville High School',
					gender: 'male',
					country: 'US',
					team: {
						create: {
							name: 'PHS Computer Team',
							challenges: {
								create: {
									title: 'Hello World',
									description: 'the flag is Hello World',
									points: 100,
									left: 1,
									flag: 'Hello World'
								}
							}
						}
					}
				}
			}
		},
		include: {
			profile: {
				include: {
					team: {
						include: {
							challenges: true
						}
					}
				}
			}
		}
	});
	console.log({ daniel });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
