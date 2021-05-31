const http = require("http");
const fs = require("fs");
let count = 0;

const server = http.createServer((req, res) => {
  //   res.setHeader("Count", "0");
  switch (req.url) {
    case "/":
      const data = fs.readFileSync("./views/home.html");
      res.write(data);
      break;
    case "/home":
      res.write(fs.readFileSync("./views/home.html"));
      break;
    case "/about":
      res.write(fs.readFileSync("./views/about.html"));
      break;
    case "/contact":
      res.write(fs.readFileSync("./views/contact.html"));
      break;
    case "/index.js":
      res.setHeader("content-type", "text/javascript");
      res.write(fs.readFileSync("./views/index.js"));
      count++;
      break;
    case "/tailwind.css":
      res.setHeader("content-type", "text/css");
      res.write(fs.readFileSync("./views/tailwind.css"));
      break;
    case "/api/getCount":
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("content-type", "text/plain");
      res.write(count.toString());
      break;
    default:
      res.setHeader("content-type", "text/html");
      res.write("<h1>Page not found<h1>");
      break;
  }
  res.end();
});

server.listen(3001, "localhost", () => {
  console.log("server is listening on port 3001");
});
