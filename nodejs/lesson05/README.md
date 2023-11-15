# Paso 1: Instalar Dotenv
Primero, instala dotenv, una librería que carga variables de entorno desde un archivo .env en process.env.

```shell
npm install dotenv
```

# Paso 2: Crear un Archivo .env
Crea un archivo .env en la raíz de tu proyecto. En este archivo, definirás tus variables de entorno. Por ejemplo:

```ts
DB_HOST=localhost
DB_USER=usuario
DB_PASS=contraseña
PORT=3000
```

**Importante**: Nunca subas tu archivo .env a repositorios públicos, especialmente si contiene información sensible. Asegúrate de agregar .env a tu archivo .gitignore.


# Paso 3: Cargar Variables de Entorno
En tu aplicación, usa dotenv para cargar las variables de entorno. **index.ts**.

```ts
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DB_HOST); // localhost
```