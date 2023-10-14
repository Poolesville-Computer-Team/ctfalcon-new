// Import needed packages
import { connect } from '@planetscale/database';
import { PrismaPlanetScale } from '@prisma/adapter-planetscale';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { fetch as undiciFetch } from 'undici';

// setup
dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

let prisma: PrismaClient = new PrismaClient();
if (process.env.NODE_ENV === 'production') {
	const connection = connect({ url: connectionString, fetch: undiciFetch });
	const adapter = new PrismaPlanetScale(connection);
	prisma = new PrismaClient({ adapter });
}

// Use Prisma Client as normal
export default prisma;
