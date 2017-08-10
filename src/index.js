const http = require('http')

const listenPort = 3000
const server = http.createServer((request, response) => {  
  console.log(request.url)
  if (request.url === "/healthz") {
    response.end('OK')
  } else if (request.url === "/readiness") {
    response.end('OK')
  } else {
    response.write("v2\n")
    response.end(JSON.stringify(request.headers))
  }
})

server.listen(listenPort, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${listenPort}`)
})