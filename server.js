const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send("howdy, y'all")
})

// app.post()
//
// app.patch()
//
// app.delete()

app.listen(port, () => {
  console.log(`Listening on port ${port}` )
})
