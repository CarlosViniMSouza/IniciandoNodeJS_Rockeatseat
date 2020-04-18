// aplicação a respeito de memoria no computador:

const os = require('os')
const sms = require('./dev-m2')

setInterval (() => {

const { freemem, totalmem } = os

const mem_ocup = parseInt(totalmem() / 1024**2)

const mem_liv = parseInt(freemem() / 1024**2)

const porcentagem = parseInt((mem_liv/mem_ocup) * 100)

const dev = {
  Total: `${mem_ocup}MB`,
  Usado: `${mem_liv}MB`,
  Porce: `${porcentagem}%`
}

console.clear()
console.log("=== Memorie PC DELL ===")
console.table(dev)
log(`$(JSON.stringify(dev))`)

}, 1000)