import pkg from 'pg';
const { Pool } = pkg;

let pool = new Pool({
    host : 'localhost',
    port : '5432',
    user : 'postgres',
    password : '19980103',
    database : 'js_demo_22',
});

console.log('connecting database ', pool.options);

export default pool;