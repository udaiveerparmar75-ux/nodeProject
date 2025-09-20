const connectRedis = require('redis');

let client = null;

const connectToRedis = async () => {
    try {
        client = connectRedis.createClient({
            host: 'localhost',
            port: 6379,
    
        });
        client.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
        await client.connect();
        console.log('Connected to Redis');
        return client;
    } catch (error) {
        console.error('Error connecting to Redis:', error);
        throw error;
    }
};

const getRedisClient = () => {
    if(!client){
        throw new Error('Redis client not initialized');
    }
    return client;
}

const insertDataToRedis = async (key, value) => {
    try {
        const redisClient = getRedisClient();
        const result = await redisClient.set(key, JSON.stringify(value));
        console.log('Data inserted into Redis');
        return result;
    } catch (error) {
        console.error('Error inserting data into Redis:', error);
        throw error;
    }
};

const getDataFromRedis = async (key) => {
    try {
        const redisClient = getRedisClient();
        const data = await redisClient.get(key);
        return data ? JSON.parse(data) : null;
        console.log('Data retrieved from Redis:', data);
        return data;
    } catch (error) {
        console.error('Error retrieving data from Redis:', error);
        throw error;
    }
};

module.exports = {
    connectToRedis, 
    getRedisClient, 
    insertDataToRedis, 
    getDataFromRedis
};
