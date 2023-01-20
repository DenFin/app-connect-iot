import http from 'http'
import {URL} from 'url'

let server;

// TODO Server mocking fertigstellen
export default (on) => {
  on('task', {
    mockServer({interceptUrl, fixture}) {
      if (server) server.close();
      const url = new URL(interceptUrl)
      server = http.createServer((req, res) => {
        if (req.url === url.pathname) {
          res.end(fixture)
        } else {
          res.end()
        }
      })
      server.listen(url.port)
      console.log(`listening at port ${url.port}`)

      return null
    },
  })
}



