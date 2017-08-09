const http = require('http')

const listenPort = 3000
const server = http.createServer((request, response) => {  
  console.log(request.url)
  response.end(JSON.stringify(request.headers))
})

server.listen(listenPort, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${listenPort}`)
})