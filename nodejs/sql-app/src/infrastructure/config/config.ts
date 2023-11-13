import dotenv from 'dotenv';
dotenv.config();

export const env = {
    port: process.env.ENV_PORT || 3000,
};

export const db = {
    port: process.env.BD_PORT || 3306,
}
