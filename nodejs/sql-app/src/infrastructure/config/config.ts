import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.ENV_PORT || 3000,
};

interface DbInterface {
  type: "mysql" | "mariadb" | "postgres" | "cockroachdb" | "sqlite" | "mssql" | "sap" | "oracle" | "cordova" | "nativescript" | "react-native" | "sqljs" | "mongodb" | "aurora-mysql" | "spanner" | string;
  host: string;
  port: number
  user: string;
  password: string;
  database_name: string;
}


export const db: DbInterface = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  database_name: process.env.DB_DATABASE_NAME || 'hola mundo',
  password: process.env.DB_PASS || 'admin123$',
};