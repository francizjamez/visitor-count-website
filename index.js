const http = require("http");
const deleteRequest = require("./requests/delete.js");
const get = require("./requests/get.js");
const post = require("./requests/post.js");
const put = require("./requests/put.js");

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "POST") {
      post(res, req);
    } else if (req.method === "GET") {
      get(res, req);
    } else if (req.method === "DELETE") {
      deleteRequest(res, req);
    } else if (req.method === "PUT") {
      put(res, req);
    }
  } catch (err) {}
});

server.listen(3001, "localhost", () => {
  console.log("server is listening on port 3001");
});
