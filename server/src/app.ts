import express from 'express';
import cors from 'cors';

import taskRouter from './resources/task/taskRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', taskRouter);
app.use(errorHandler);

export default app;
