const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(cors());
server.use(middlewares);
console.log(router);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
