import dotenv from 'dotenv';
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from './Schema';

// Load environment variables from .env file
dotenv.config();

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

export const db = drizzle(sql, { schema });
