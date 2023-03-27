import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const requiredEnvVars = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS'];

requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.warn(`Environment variable ${envVar} is not set`);
    }

    if (process.env[envVar] === '') {
        console.warn(`Environment variable ${envVar} is empty`);
    }
});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    maxIdle: 10000, // 10 seconds
    idleTimeout: 60000, // 60 seconds
});

export default pool.promise();
