import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IRoleEntity } from "../../domain/entities/IRoleEntity";

@Entity()
export class RoleEntity implements IRoleEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'text' })
    description: string;
}