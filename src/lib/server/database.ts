// Import needed packages
import { connect } from '@planetscale/database';
import { PrismaPlanetScale } from '@prisma/adapter-planetscale';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { fetch as undiciFetch } from 'undici';

// setup
dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

// init prisma client
const connection = connect({ url: connectionString, fetch: undiciFetch });
const adapter = new PrismaPlanetScale(connection);

// Use Prisma Client as normal
export const prisma = new PrismaClient({ adapter });
