const { insertDataToRedis, getDataFromRedis } = require('../config/redis');

async function getExample1Data(traceId, order_id) {
    console.log(`nwefjnfnejfnefnejf.  traceId: ${traceId} and order_id: ${order_id}`);
    // Simulate fetching data or performing some business logic
    return { message: `This is data from the example1 service layer and traceId: ${traceId} and order_id: ${order_id}` };
}
async function insertDataInRedisService(orderId, traceId){
    try{
        const key = `order: ${orderId}`
        const data = { orderId, traceId, timestamp: new Date().toISOString() };

        const data1 = await insertDataToRedis(key, data);   
        console.log(`Data inserted successfully for order_id: ${orderId}`); 
        return data1;
    }catch(error){
        console.error('Error in insertDataInRedis:', error);
        return { success: false, error: error.message };
    }
}

async function getDataFromRedisService(orderId) {
    try {
        const key = `order:${orderId}`;
        const data = await getDataFromRedis(key);
        return { success: true, data };
    } catch (error) {
        console.error('Error in getDataFromRedisService:', error);
        return { success: false, error: error.message };
    }
}
module.exports = {
    getExample1Data,
    insertDataInRedisService,
    getDataFromRedisService
};