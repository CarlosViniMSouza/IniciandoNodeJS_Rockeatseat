//  instat logger:

const EventEmmiter = require('events')

const fs = require('fs')

const emmiter = new EventEmmiter()

emmiter.on('log', (msg) => {
  fs.appendFile(path.join(__dirname, 'log.txt') , msg , ERRO => {
      if (ERRO) throw ERRO
  })
})

function log(msg) {
  emmiter.emit('log', msg)
}

module.exports = log