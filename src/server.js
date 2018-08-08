const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const html = fs.readFileSync('./index.html');
const normalizeCss = fs.readFileSync('../node_modules/normalize.css/normalize.css');
const siteCss = fs.readFileSync('./site.css');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  switch(req.url) {
    case '/site.css':
      res.setHeader('Content-Type', 'text/css');
      res.end(siteCss);
      break;
    case '/normalize.css':
      res.setHeader('Content-Type', 'text/css');
      res.end(normalizeCss);
      break;
    default:
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
