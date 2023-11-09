# 1. Instalación de Express y Tipos de Express

Primero, necesitarás instalar Express y las definiciones de tipo para TypeScript. Abre tu terminal y ejecuta los siguientes comandos en el directorio de tu proyecto:

```
npm install express
npm install @types/express --save-dev
```

# 2. Configuración Básica de Express

Una vez instalado Express, puedes configurar una aplicación básica. Para hacer esto, edita tu archivo src/index.ts para que se vea de la siguiente manera:

```
import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('¡Hola Mundo cruel!');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

# Instalación de ts-node-dev

## Instalar ts-node-dev:

Ejecuta el siguiente comando en tu terminal para instalar ts-node-dev como una dependencia de desarrollo:
```
npm install ts-node-dev --save-dev
```

## Configurar el script en package.json:

Modifica tu package.json para usar ts-node-dev en el script de inicio. Por ejemplo:

```
"scripts": {
    "start": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```
npm i uuid
npm i --save-dev @types/uuid
```