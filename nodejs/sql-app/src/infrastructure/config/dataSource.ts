import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/userEntity";
import { db } from '../../infrastructure/config/config';
import { RoleEntity } from "../entities/roleEntity";

export const AppDataSource = new DataSource({
    type: db.type as "mysql" | "mariadb",
    host: db.host,
    port: db.port as number,
    username: db.username,
    password: db.password,
    database: db.database,
    synchronize: true,
    logging: false,
    entities: [UserEntity, RoleEntity],
    subscribers: [],
    migrations: [],
});
