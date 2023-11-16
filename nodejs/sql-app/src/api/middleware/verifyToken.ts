import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwt as jwtConfig } from '../../infrastructure/config/config';

export const verifyTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        // TODO: create interface for the token
        jwt.verify(token, jwtConfig.secretKey, (err, user: any) => {
            if (err) {
                return res.status(403).json({ message: "Token no válido" });
            }
            req.user_id = user.userId;
            next();
        });
    } else {
        res.status(401).json({ message: "Token no proporcionado" });
    }
};
