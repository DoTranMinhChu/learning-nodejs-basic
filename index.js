const express = require('express');
const app = express();
const port = 3000;
const { router } = require('./apiRouter');

app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`Example app http://localhost:${port}/api/v1`)
})