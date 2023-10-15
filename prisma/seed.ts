import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const daniel = await prisma.user.upsert({
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
	const team = await prisma.team.upsert({
		where: { id: '2' },
		update: {},
		create: {
			id: '2',
			name: 'PHS Computer Team',
			members: {
				connect: {
					id: '1'
				}
			}
		}
	});
	const challenge = await prisma.challenge.upsert({
		where: { id: '3' },
		update: {},
		create: {
			id: '1',
			title: 'Hello World',
			description: 'the flag is Hello World',
			points: 100,
			left: 1,
			solvedBy: {
				connect: [{ id: '2' }]
			},
			flag: 'Hello World'
		}
	});
	console.log({ daniel, team, challenge });
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
