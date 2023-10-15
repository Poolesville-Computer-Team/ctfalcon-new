// Import needed packages
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import ws from 'ws';

// Setup
dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Init prisma client
let prisma: PrismaClient = new PrismaClient();
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	const pool = new Pool({ connectionString });
	const adapter = new PrismaNeon(pool);
	prisma = new PrismaClient({ adapter });
}

// Use Prisma Client as normal
export default prisma;
