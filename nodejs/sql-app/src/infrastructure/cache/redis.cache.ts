import { createClient } from 'redis';
import { ICacheService } from '../../domain/interfaces/IRedisCache';
import { redis_env } from '../config/config';

export class RedisCacheService implements ICacheService {
    private client;

    constructor() {
        this.client = createClient({ url: redis_env.url });
        this.client.connect();
    }

    async get(key: string): Promise<string | null> {
        return this.client.get(key);
    }

    async set(key: string, value: string): Promise<void> {
        await this.client.set(key, value);
    }
}
