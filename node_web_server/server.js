const http = require('http');
const fs = require("fs").promises;

const server = http.createServer((req, res) =>{
if (req.url === "/home" || req.url === "/") {
fs.readFile(__dirname + "/index.html")
.then((contents) => {
res.setHeader("Content-Type", "text/html");
res.writeHead(200);
res.end(contents);
});
}
});

server.listen(8000, "localhost", () => {
console.log(`Server is running on http://${host}:${port}`);
});