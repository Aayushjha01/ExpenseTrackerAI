// Load environment variables from .env file
require('dotenv').config();

console.log('Database URL:', process.env.NEXT_PUBLIC_DATABASE_URL); // Log to verify

module.exports = {
    dialect: 'postgresql',
    schema: './utils/Schema.jsx',
    out: './drizzle',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL
    }
};
