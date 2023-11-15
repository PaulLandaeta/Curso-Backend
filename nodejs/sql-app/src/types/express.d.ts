import express from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user_id?: string;
    }
}
