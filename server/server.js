const app = require('http').createServer()
const io = require('socket.io')(app)

app.listen(process.env.PORT || 9000)

io.on('connection', (socket) => {
  console.log(socket)
})