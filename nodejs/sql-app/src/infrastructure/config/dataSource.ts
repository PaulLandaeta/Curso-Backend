import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "192.168.80.130",
  port: 3306,
  username: "JoseC",
  password: "JoseC135*",
  database: "JoseCDB",
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});