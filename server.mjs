console.log("hello server");

import express from'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("request ip: ", req.ip);
  res.send('Hello World!')
})

//http//:192.168.0.114:3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 