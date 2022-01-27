const cors = require('cors');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { userRouter } = require('./routes/userRouter');
const { templateRouter } = require('./routes/templateRouter');
const { workspaceRouter } = require('./routes/workspaceRouter');
const { departmentRouter } = require('./routes/departmentRouter');
const { categoryRouter } = require('./routes/categoryRouter');
const { boughtWorkspacesRouter } = require('./routes/boughtWorkspacesRouter');
const { authMiddleware } = require('./middleware/authMiddleware');

const app = express();
const server = http.createServer(app);

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(userRouter);
app.use(templateRouter);
app.use(workspaceRouter);
app.use(departmentRouter);
app.use(categoryRouter);
app.use(boughtWorkspacesRouter);
app.use(authMiddleware);

// Set up mongoose connection
const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully');
});
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected');
});
mongoose.connection.on('error', (error) => {
  console.log('Mongo connection has an error', error);
  mongoose.disconnect();
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected');
});

server.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
