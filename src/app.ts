export {};

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const taskRouter = require('./resources/task/task.router');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use('/api', taskRouter);
app.use(errorHandler);
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
