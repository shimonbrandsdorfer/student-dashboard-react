
import knex from 'knex';





const knexClient = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: { min: 3, max: 10 },
});



export default knexClient;

