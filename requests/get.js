let { getUsers, id } = require("../users.js");
const fs = require("fs");

function get(res, req) {
  const { url } = req;

  switch (url) {
    case "/":
      res.write(fs.readFileSync("./views/home.html"));
      break;
    case "/api/users":
      res.statusCode = 200;
      res.write(JSON.stringify(getUsers()));
      break;
    default:
      try {
        res.write(fs.readFileSync(`./views${url}.html`));
      } catch (err) {
        try {
          res.write(fs.readFileSync(`./views${url}`));
        } catch (err) {
          res.write(fs.readFileSync(`./views/404.html`));
        }
      }
  }

  res.end();
}

module.exports = get;
