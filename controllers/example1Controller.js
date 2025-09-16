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

module.exports = {
    getExample1,
};