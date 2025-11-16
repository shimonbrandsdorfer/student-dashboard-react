// drizzle.config.js
module.exports = {
  schema: './drizzle/schema.js',         // or .ts if you're using TypeScript
  out: './drizzle/migrations',
  dialect: 'postgresql',                 // ✅ Required
  driver: 'pg',                          // ✅ Required for Node.js projects
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};
