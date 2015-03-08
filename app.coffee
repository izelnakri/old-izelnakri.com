express = require 'express'
morgan = require "morgan"
compress = require "compression"
app = express()

app.use morgan("dev")

app.use compress()

app.use express.static('public')

app.use express.static('views')

app.use '/build', express.static('build')


app.get('/', (err, res) ->
  res.sendFile 'index.html'
)

server = app.listen(3000, ->
  host = server.address().address
  port = server.address().port

  console.log 'Example app listening at http://%s:%s', host, port
)