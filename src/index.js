const http = require('http')
const fs = require('fs')

let buildSha = readBuildSha()

const listenPort = 3000
const server = http.createServer((request, response) => {  
  if (request.url === "/healthz") {
    response.end('OK')
  } else if (request.url === "/readiness") {
    response.end('OK')
  } else {
    console.log(request.url)
    response.write(`Build SHA: ${buildSha}\n`)
    response.end(JSON.stringify(request.headers))
  }
})

server.listen(listenPort, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${listenPort}`)
})

function readBuildSha(path = `${__dirname}/../buildsha.txt`) {  
  console.log(`Reading buildsha from ${path}`)
  if(fs.existsSync(path)) {
    return fs.readFileSync(path)
  } else {
    return 'unknown'
  }
}