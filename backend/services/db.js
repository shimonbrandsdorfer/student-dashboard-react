

/* db.js */

import knex from 'knex';
import { Pool } from 'pg';





export const knexClient = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: { min: 3, max: 10 },
});

export const poolClient = new Pool({
    connectionString: process.env.DATABASE_URL,
    

});



