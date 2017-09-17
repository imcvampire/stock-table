const app = require('http').createServer()
const io = require('socket.io')(app)

const initData = require('./data/initData')
const updateData = require('./data/updateData')

const TIME_INTERVAL = process.env.TIME_INTERVAL || 5000

let stockList = initData()

setInterval(() => {
  stockList = updateData(stockList)

  io.sockets.emit('data', stockList)
}, TIME_INTERVAL)

io.on('connection', (socket) => {
  socket.emit('initData', stockList)
})

module.exports = app