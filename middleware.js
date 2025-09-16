const {v4 : uuidv4} = require('uuid');
function middleware(req, res, next) {
    const traceId = uuidv4();
    req.traceId = traceId;
    console.log(`Trace ID: ${traceId}`);
    next();
}

module.exports = middleware;