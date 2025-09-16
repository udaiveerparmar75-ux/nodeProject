async function getExample1Data(traceId, order_id) {
    console.log(`nwefjnfnejfnefnejf.  traceId: ${traceId} and order_id: ${order_id}`);
    // Simulate fetching data or performing some business logic
    return { message: `This is data from the example1 service layer and traceId: ${traceId} and order_id: ${order_id}` };
}

module.exports = {
    getExample1Data,
};