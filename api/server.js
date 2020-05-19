const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')

const restrict = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const usersRouter = require('../users/users-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser())

server.use('/api/auth', authRouter);
server.use('/users', usersRouter)
server.use('/api/jokes', restrict, jokesRouter);

module.exports = server;


