// drizzle.config.ts
export default {
  schema: './drizzle/schema.ts',         // path to your schema file
  out: './drizzle/migrations',           // where migration files go
  driver: 'pg',                          // or 'mysql', 'sqlite'
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  },
};