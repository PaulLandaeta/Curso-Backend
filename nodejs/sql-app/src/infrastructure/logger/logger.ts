import winston from 'winston';
import { lg, env } from '../config/config';

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${level}:[${timestamp}] ${message}`;
});

const logger = winston.createLogger({
    level: lg.level,
    format: winston.format.combine(
        winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
        winston.format.simple(),//myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

if (env.environment !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
            myFormat
        ),
    }));
}

export default logger;
