import winston, { format } from 'winston';

const myFormat = format.printf(({ level, message, timestamp, error }) => {
  const errorMessage = error ? `\n${error.stack}` : '';
  return `${level}:[${timestamp}] ${message}${errorMessage}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
    myFormat
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: format.combine(
      format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
      myFormat
    ),
  }));
}

export default logger;
