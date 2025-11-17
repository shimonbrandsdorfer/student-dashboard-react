
import 'dotenv/config'; 

export default config =  {
  schema: './drizzle/schema.js',         // or .ts if you're using TypeScript
  out: './drizzle/migrations',
  dialect: 'postgresql',                 
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};