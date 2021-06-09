let { getUsers, setUsers } = require("../users.js");

function deleteRequest(res, req) {
  const { url } = req;
  const regex = /\/api\/users/;
  const users = getUsers();

  let idRegex = /\d+/;
  let idParam = url.match(idRegex)[0];

  if (regex.test(url)) {
    if (idParam === null) {
      res.statusCode = 400;
      res.write("Invalid ID");
    } else {
      setUsers(users.filter(({ id }) => id !== idParam));
      res.statusCode = 201;
      res.write("Successfully deleted user");
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

module.exports = deleteRequest;
