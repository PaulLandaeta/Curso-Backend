# Paso 1: Instalar Dependencias

Instala winston y morgan junto con sus tipos para TypeScript:

```shell
npm install winston morgan
npm install --save-dev @types/winston @types/morgan
```

# Paso 2: Configurar Winston

Crea un archivo para configurar winston. En este ejemplo, lo llamaremos logger.ts.

src/infrastructure/logger/logger.ts:

```ts
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;
```

# Paso 3: Integrar Morgan con Winston

En tu archivo principal de servidor Express, configura morgan para que use winston para registrar las solicitudes HTTP.

```ts
import express from "express";
import morgan from "morgan";
import logger from "../logger/logger";

const app = express();

app.use(
  morgan("combined", {
    stream: { write: (message: string) => logger.info(message.trim()) },
  })
);
```

# Paso 4: Configurar el Formato de Logger

Modificarás la configuración de winston para usar un formato que incluya el nivel de log, la fecha y hora, y cualquier otra información que consideres relevante.

```ts
import winston from 'winston';

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${level}:[${timestamp}] ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
            myFormat
        ),
    }));
}

export default logger;
```

# Niveles 

### Niveles de Log Apropiados
Utiliza los niveles de log (como INFO, DEBUG, WARN, ERROR) de manera adecuada para reflejar la severidad o importancia del mensaje.
- INFO: Para información general sobre el funcionamiento de la aplicación.
- DEBUG: Para información detallada, útil durante el desarrollo o la depuración.
- WARN: Para situaciones anormales que no son errores pero que podrían necesitar atención.
- ERROR: Para errores que afectan el funcionamiento de la aplicación.

# Logger 

```ts
logger.error(`Error al procesar la solicitud: ${error.message}`, {
  requestId: req.id,
  userId: user.id,
  operation: 'actualizarPerfil',
  errorStack: error.stack,
});
```

### stackError

lleva el rastro de errores

```shell
Error: Falló la conexión a la base de datos
    at conectarBaseDeDatos (db.js:25)
    at obtenerUsuario (usuario.js:58)
    at iniciarSesion (auth.js:34)
    at manejarSolicitudHTTP (server.js:80)
```