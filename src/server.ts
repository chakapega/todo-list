const app = require('./app');
const PORT = 4000;

process.on('uncaughtException', () => {
  process.exitCode = 1;
});

process.on('unhandledRejection', () => {
  process.exitCode = 1;
});

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
