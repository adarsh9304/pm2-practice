const express = require('express');
const { Parent } = require('./fork/Parent');

const app = express();

const port = 3001;

app.get('/fork',Parent);

app.get('/', (req, res) => {
  res.send(`Hello from process ${process.pid}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port} with process ID: ${process.pid}`);
});
