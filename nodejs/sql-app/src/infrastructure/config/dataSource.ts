import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { db, env } from "./config";

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "admin123$",
//   database: "sql_app_backend",
//   synchronize: true,
//   logging: false,
//   entities: [UserEntity],
//   subscribers: [],
//   migrations: [],
// });

export const AppDataSource = new DataSource({
  type: db.type,
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  database: db.database_name,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});
