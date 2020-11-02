export {};

const express = require('express');
const app = express();
const PORT = 3000;
const taskRouter = require('./resources/task/task.router');

app.use(express.json());

app.use('/api', taskRouter);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
