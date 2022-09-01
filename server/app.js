const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})