const express = require('express');
const app = express();

app.get('/api/v1/permissions', (req, res) => {
  console.log('test permissions');
});

app.get('/api/rules', (req, res) => {
  console.log('test rules');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
