import express from 'express';
import dotenv from 'dotenv';
import rootRoute from './routes/index.route';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', rootRoute);

export default app;
