const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  }
  if (req.url === "/about") {
    res.end("aboutpage");
  }
});

server.listen(5000);
