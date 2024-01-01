import http from 'http'
import { URL } from 'url'
import { router } from './router'

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host}`)
    router(req, res, url)
  } catch (e) {
    res.writeHead(500, {
      'Content-Type': 'text/json'
    })
    res.end(JSON.stringify({ error: 'Server error!' }))
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`)
})
