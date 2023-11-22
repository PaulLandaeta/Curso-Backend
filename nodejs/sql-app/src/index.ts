import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from './api/swagger/swaggerConfig';

import { AppDataSource } from "./infrastructure/config/dataSource";
import logger from './infrastructure/logger/logger';
import { env } from './infrastructure/config/config';
import { apiRoutes } from './api/controllers/apiRoutes';
import { limiter } from './api/middleware/rate.limiter';

AppDataSource.initialize().then(() => {
    const app = express();
    dotenv.config();

    const PORT = env.port;

    app.use(express.json());

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use(limiter);
    // Setup Logger 
    app.use(morgan('combined', { stream: { write: (message: string) => logger.info(message.trim()) } }));

    app.get('/', (req: Request, res: Response) => {
        res.send('Servidor Up');
    });



    app.use('/api', apiRoutes());

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));
