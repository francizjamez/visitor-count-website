let { getUsers, setUsers, id } = require("../users.js");

function post(res, req) {
  switch (req.url) {
    case "/api/users":
      req.setEncoding("utf8");
      let requestBody = "";
      req.on("data", (data) => {
        requestBody += data.toString();
      });
      req.on("end", () => {
        let user = JSON.parse(requestBody);
        user.id = id++;
        user.created_at = Date.now();
        res.writeHead(201);
        res.write(JSON.stringify(user));
        setUsers([...getUsers(), user]);
        console.log("Added user");
        res.end();
      });
      break;
  }
}

module.exports = post;
