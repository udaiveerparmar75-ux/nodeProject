const express = require('express');
const {pool: mysqlConnection, connect: connectToMysql} = require('./config/mysql');
const connectMongoDB = require('./config/mongo');
const { connectToRedis } = require('./config/redis');
const exampleRoutes = require('./routes/example1Routes');
const cors = require('cors');
require('dotenv').config();
const middleware = require('./middleware');
const app= express();
const PORT = process.env.PORT || 3000;
connectToMysql();
// Connect to MongoDB
connectMongoDB();
connectToRedis();


//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.json({message: 'welcome to nodejs apis',
    status: 'server is running',
    timestamp: new Date().toISOString})
});

app.get('/getTraceId', middleware, (req, res) => {
  // Your logic here
  console.log("trace_id printed successfully");
  res.json({ traceId: req.traceId || 'no-trace-id' });
});
app.use('/v1', exampleRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});