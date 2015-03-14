express = require 'express'
morgan = require "morgan"
compress = require "compression"
app = express()

app.use compress()

app.use express.static('public')
app.use express.static('views')

# assetOptions = { maxAge: '2 days' }
app.use '/build', express.static('build', assetOptions if assetOptions?)

app.use morgan("dev")

app.set 'port', (process.env.PORT || 5000)

app.get '/', (err, res) ->
  res.set("Access-Control-Allow-Origin": "*")
  res.sendFile 'index.html'


server = app.listen(app.get('port'), ->
  host = server.address().address
  port = server.address().port

  console.log 'Example app listening at http://%s:%s', host, port
)