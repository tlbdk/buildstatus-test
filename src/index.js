const http = require('http')
const fs = require('fs')

let commitSha = readCommitSha()

const listenPort = 3000
const server = http.createServer((request, response) => {  
  if (request.url === "/healthz") {
    response.end('OK')
  } else if (request.url === "/readiness") {
    response.end('OK')
  } else {
    console.log(request.url)
    response.write(`Fancy testing feature\n`)
    response.write(`Build commit SHA: ${commitSha}\n`)
    response.end(JSON.stringify(request.headers))
  }
})

server.listen(listenPort, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${listenPort}`)
})

function readCommitSha(path = `${__dirname}/../commitsha.txt`) {  
  console.log(`Reading commitsha from ${path}`)
  if(fs.existsSync(path)) {
    return fs.readFileSync(path)
  } else {
    return 'unknown'
  }
}