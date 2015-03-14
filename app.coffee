express = require 'express'
morgan = require "morgan"
compress = require "compression"
app = express()

app.use compress()

app.use express.static('public')
app.use express.static('views')
app.use '/build', express.static('build', { maxAge: '2 days' })

app.use morgan("dev")

app.set 'port', (process.env.PORT || 5000)

app.get '/', (err, res) ->
  res.sendFile 'index.html'


server = app.listen(app.get('port'), ->
  host = server.address().address
  port = server.address().port

  console.log 'Example app listening at http://%s:%s', host, port
)