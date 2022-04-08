import { RedisClientType, createClient } from 'redis';

import { logger } from './logger';

const client: RedisClientType = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});
client.on('error', (err) => logger.error(`Redis Client Error: ${err}`));
client.connect();

export default client;
