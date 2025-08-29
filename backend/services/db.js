import {Pool} from 'pg';
import knex from 'knex';


const client = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING
})

client.connect()


const knexClient = knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    pool: {
        min: 3,
        max: 10
    }
});


export default knexClient;

