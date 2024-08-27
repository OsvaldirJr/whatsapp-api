const express = require('express')
const app = express()
const port = 3000

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send(JSON.stringify(req.body))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})