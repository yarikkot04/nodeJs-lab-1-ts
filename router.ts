import { IncomingMessage, ServerResponse } from 'http'
import { URL } from 'url'

function router(req: IncomingMessage, res: ServerResponse, url: URL) {
  try {
    const path = url.pathname
    switch (path) {
      case '/': {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end('<h1>Lab 1. TypeScript(bonus)</h1>')
        break
      }
      case '/student': {
        res.writeHead(200, {
          'Content-Type': 'text/json'
        })
        res.end(JSON.stringify({ student: 'Yaroslav Kotenko IM-13' }))
        break
      }
      default: {
        res.writeHead(404, {
          'Content-Type': 'text/json'
        })
        res.end(JSON.stringify({ error: 'Page not found!' }))
        break
      }
    }
  } catch (e) {
    res.writeHead(500, {
      'Content-Type': 'text/json'
    })
    res.end(JSON.stringify({ error: 'Server error!' }))
  }
}

export { router }
