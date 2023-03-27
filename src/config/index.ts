import pkg from '../../package.json';

// check to see if environment variables are set, if not warn the user

export const CONFIG = {
    APP: {
        NAME: pkg.name,
        VERSION: pkg.version,
        PORT: process.env.PORT || 3000,
        DESCRIPTION: pkg.description,
        ENV: process.env.NODE_ENV || 'development',
        AUTHORS: pkg.author,
    },
    DB: {
        HOST: process.env.DB_HOST || 'localhost',
        NAME: process.env.DB_NAME || 'test',
        USER: process.env.DB_USER || 'root',
        PASS: process.env.DB_PASS || 'root',
    },
    SESSION: {},
} as const;
