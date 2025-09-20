const example1Service = require('../services/example1Service');

async function getExample1(req, res) {
    try {
        const data = await example1Service.getExample1Data(req.traceId, req.query.order_id);
        res.json(data);
    } catch (error) {
        console.error('Error in getExample1 controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function insertRedisData(req, res) {
    try {
        const { order_id } = req.body;
        const traceId = req.traceId;
        
        if (!order_id || !traceId) {
            return res.status(400).json({ 
                error: 'Missing required fields: order_id and traceId' 
            });
        }
        console.log(`${traceId} insertRedisData ${order_id}, ${traceId}`)
        const result = await example1Service.insertDataInRedisService(order_id, traceId);
        res.json(result);
    } catch (error) {
        console.error('Error in insertRedisData controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getRedisData(req, res) {
    try {
        const { order_id } = req.params;
        
        if (!order_id) {
            return res.status(400).json({ 
                error: 'Missing required parameter: order_id' 
            });
        }
        
        const result = await example1Service.getDataFromRedisService(order_id);
        res.json(result);
    } catch (error) {
        console.error('Error in getRedisData controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getExample1,
    insertRedisData,
    getRedisData
};