import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // 从 .env 读取
    ssl: { rejectUnauthorized: false } // 适用于 Neon
});

export default pool;