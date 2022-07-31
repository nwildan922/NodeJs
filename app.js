const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ status: 'express runnning.' })
})

app.get('/user/:id', (req, res) => {
  res.json({ status: `user dengan id ${req.params.id}` })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})