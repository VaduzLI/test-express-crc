const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening at http://express-crc-git-node-test.apps-crc.testing${port}`)
})
