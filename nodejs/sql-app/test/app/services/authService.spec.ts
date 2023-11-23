import 'mocha';
import { expect } from 'chai';
import bcrypt from "bcrypt";
import sinon from 'sinon';
import { AuthService } from '../../../src/app/services/authService';
import { UserRepository } from '../../../src/domain/interfaces/userRepository';
import { RedisCacheService } from '../../../src/infrastructure/cache/redis.cache';
import { Encrypt } from '../../../src/app/utils/encrypt';
import { UserRepositoryImpl } from '../../../src/infrastructure/repositories/userRepositoryImpl';
import { EncryptImpl } from '../../../src/infrastructure/utils/encrypt.jwt';
import { User } from '../../../src/domain/models/user';

describe('AuthService', () => {
    let authService: AuthService;
    let userRepositoryMock: sinon.SinonStubbedInstance<UserRepository>;
    let redisCacheServiceMock: sinon.SinonStubbedInstance<RedisCacheService>;
    let encryptMock: sinon.SinonStubbedInstance<Encrypt>;

    beforeEach(() => {
        userRepositoryMock = sinon.createStubInstance(UserRepositoryImpl);
        redisCacheServiceMock = sinon.createStubInstance(RedisCacheService);
        encryptMock = sinon.createStubInstance(EncryptImpl);
        authService = new AuthService(userRepositoryMock, encryptMock, redisCacheServiceMock);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('debe lanzar un error si el usuario no existe', async () => {
        userRepositoryMock.findByEmail.resolves(null);
        try {
            await authService.login({ email: 'test@example.com', password: 'password' });
            expect.fail('El servicio no lanzó un error');
        } catch (error) {
            const err = error as Error;
            expect(err.message).to.equal('El email o la contraseña son incorrectos');
        }
    });
    it('Login exitoso', async () => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync('password', salt);
        const createdDate = new Date();
        const userMock: User = {
            id: '1',
            username: 'test',
            passwordHash: hash,
            email: 'test@example.com',
            createdAt: createdDate,
            lastLogin: createdDate,
            role: null,
        }
        userRepositoryMock.findByEmail.resolves(userMock);
        encryptMock.encrypt.resolves('tokenSimulado');
        userMock.token = 'tokenSimulado';
        userRepositoryMock.updateUser.resolves(userMock);
        const userLogged = await authService.login({ email: 'test@example.com', password: 'password' });
        delete userLogged.lastLogin;
        const userExpected = {
            id: '1',
            username: 'test',
            email: 'test@example.com',            
            token: 'tokenSimulado'
        }
        expect(userLogged).to.eql(userExpected);

    });
});
