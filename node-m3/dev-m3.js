const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

  if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        (ERRO, content) => {
          if (ERRO) throw ERRO

          res.end(content)
        }
      )
  }
}).listen(5050, () => console.log('Servidor rodando...'))