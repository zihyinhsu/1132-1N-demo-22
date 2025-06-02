import { Pool } from 'pg';

// const { Pool } = pkg;

let pool;

console.log('process.env.DATABASE', process.env.DATABASE);

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '19980103',
    database: 'js_demo_xx',
  });
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: 'aws-0-ap-northeast-1.pooler.supabase.com',
    port: '5432',
    user: 'postgres.gstzidlhkhikvmsxsfxk',
    password: 'AnqpOMnb15t74Yig',
    database: 'postgres',
  });
}

console.log('connect database', pool.options);

export default pool;