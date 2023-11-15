import { IRoleEntity } from '../entities/IRoleEntity';
import { v4 as uuidv4 } from 'uuid';

export class Role {
    id: string;
    name: string;
    description: string;

    constructor(userEntity: IRoleEntity) {
        this.id = userEntity.id || uuidv4();
        this.name = userEntity.name;
        this.description = userEntity.description;
    }
}