const express = require('express');
const exampleRoutes = require('./routes/example1Routes');
const cors = require('cors');
require('dotenv').config();
const middleware = require('./middleware');
const app= express();
const PORT = process.env.PORT || 3000;

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
  res.json({ traceId: req.traceId || 'no-trace-id' });
});
app.use('/v1', exampleRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});