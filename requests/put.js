let { getUsers, setUsers } = require("../users.js");

function put(res, req) {
  const { url } = req;
  const users = getUsers();
  const regex = /\/api\/users/;

  let idRegex = /\d+/;
  let idParam = url.match(idRegex)[0];

  if (regex.test(url)) {
    if (idParam === null) {
      res.statusCode = 400;
      res.write("Invalid ID");
    } else {
      let requestBody = "";
      req.on("data", (data) => {
        requestBody += data.toString();
      });
      req.on("end", () => {
        let modifiedUser = JSON.parse(requestBody);
        setUsers(
          users.map((user) => (user.id === idParam ? modifiedUser : user))
        );
        res.statusCode = 201;
      });
    }
  } else {
    try {
      res.write(fs.readFileSync(`./views${url}`));
    } catch (err) {
      res.statusCode = res.write(fs.readFileSync(`./views/404.html`));
    }
  }

  res.end();
}

module.exports = put;
