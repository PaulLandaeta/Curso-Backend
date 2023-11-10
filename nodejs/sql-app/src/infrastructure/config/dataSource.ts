import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/userEntity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "",
    password: "",
    database: "sql_app",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    subscribers: [],
    migrations: [],
});
