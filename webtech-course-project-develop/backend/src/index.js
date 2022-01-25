const cors = require('cors');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: '*' }
});
const { userRouter } = require('./routes/userRouter');
const { authMiddleware } = require('./middleware/authMiddleware');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use('/user', userRouter);
app.use(authMiddleware);

// Set up mongoose connection
const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
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

io.use((socket, next) => {
  if (socket.handshake.query !== undefined && socket.handshake.query.token !== undefined) {
    try {
      jwt.verify(socket.handshake.query.token, process.env.token_secret);
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  } else {
    next(new Error('Authentication error'));
  }
})
.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});
