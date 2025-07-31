import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';
import cors from 'cors';
import env from './config/dotEnv.config.js';
import { userRouter, configRouter, avatarRouter } from './routes/index.router.js';

const app = express();
mongoDB();

app.use(cors({ origin: env.frontUrl }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use('/api/user', userRouter);
app.use('/api/config', configRouter);
app.use('/api/avatar', avatarRouter);

app.listen(env.port, () => console.log('Server conected'));