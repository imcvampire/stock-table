const app = require('http').createServer()
const io = require('socket.io')(app)

const { initData } = require('./data')

const stockList = initData()

io.on('connection', (socket) => {
  socket.emit('initData', stockList)
})

module.exports = app