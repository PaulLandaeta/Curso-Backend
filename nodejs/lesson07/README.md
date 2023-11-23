# Paso 1: Configuración Inicial
Asegúrate de tener Mocha, Chai y las dependencias necesarias instaladas. Si aún no las tienes, puedes instalarlas con:

```shell
npm install --save-dev mocha chai @types/mocha @types/chai ts-node
```

# Paso 2: Configurar Mocha para TypeScript
Configura Mocha para usar TypeScript. Esto normalmente se hace añadiendo una configuración en tu package.json
```json
"scripts": {
  "test": "mocha -r ts-node/register 'src/**/*.spec.ts'"
}
```

# Paso 3: Escribir los Tests
Crea un archivo de test para AuthService. Utilizarás describe para definir el conjunto de pruebas y it para las pruebas individuales.

```ts
import { expect } from 'chai';
import 'mocha';
import sinon from 'sinon';
import { AuthService } from '../../../src/app/services/authService';
import { UserRepository } from '../../../src/domain/interfaces/userRepository';
import { RedisCacheService } from '../../../src/infrastructure/cache/redis.cache';
import { Encrypt } from '../../../src/app/utils/encrypt';
import { UserRepositoryImpl } from '../../../src/infrastructure/repositories/userRepositoryImpl';
import { EncryptImpl } from '../../../src/infrastructure/utils/encrypt.jwt';

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
});

```

# Paso 4: Ejecutar los Tests
Corre tus tests utilizando el comando:
```shell
npm run test
```