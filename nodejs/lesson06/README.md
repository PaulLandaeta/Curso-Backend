# Paso 1: Instalar Dependencias de Swagger

Primero, necesitarás instalar swagger-ui-express y swagger-jsdoc, que son las bibliotecas que te permitirán integrar Swagger en tu aplicación Express.

```shell
npm install swagger-ui-express swagger-jsdoc
npm install @types/swagger-jsdoc
npm install @types/swagger-ui-express
```

# Paso 2: Configurar Swagger JSDoc
Crea un archivo donde definirás la configuración básica de Swagger y las especificaciones de tu API.

src/api/swagger/swaggerConfig.ts:

```ts
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Mi Aplicación',
        version: '1.0.0',
        description: 'Esta es la documentación de mi API',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de Desarrollo',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/api/controllers/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

```

# Paso 3: Servir la Documentación Swagger en tu Aplicación
Ahora, necesitas configurar tu aplicación Express para que sirva la UI de Swagger y utilice la configuración que has definido.

```ts 
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swaggerConfig';

const app = express();

// ...configuración previa de tu aplicación...

// Ruta para Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ...resto de tu configuración y rutas...

export default app;

```

# Paso 4: Documentar tus Rutas, Controladores y Modelos
Utiliza JSDoc para documentar tus rutas, controladores y modelos. Swagger JSDoc buscará estas anotaciones para generar la documentación.


```ts 
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión de un usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: "usuario_ejemplo"
 *               password: "contraseña123"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Credenciales inválidas
 */
```

# Paso 5: Probar y Asegurarse de que Todo Funciona
Inicia tu aplicación y visita http://localhost:3000/docs. Deberías ver la interfaz de usuario de Swagger con la documentación de tu API.
