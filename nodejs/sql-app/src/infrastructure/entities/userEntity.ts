import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUserEntity } from '../../domain/entities/IUserEntity';
@Entity()
export class UserEntity implements IUserEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: 'varchar' })
    username!: string;

    @Column({ type: 'varchar', unique: true })
    email!: string;

    @Column({ type: 'varchar' })
    passwordHash!: string;

    @Column({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    lastLogin!: Date;

    @Column({ type: 'uuid' })
    roleId!: string;
}
