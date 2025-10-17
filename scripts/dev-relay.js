const http = require('http');
const Gun = require('gun');

const PORT = Number(process.env.PORT || 8765);

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('gun-relay-ok');
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

Gun({
  web: server,
  file: false
});

server.listen(PORT, () => {
  console.log(`Gun relay listening on http://localhost:${PORT}/gun`);
});
