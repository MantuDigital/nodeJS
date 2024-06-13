const http = require('http');

const host = 'localhost';
const port = 8000; 

const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1> Hello,Web developers1");
  res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
