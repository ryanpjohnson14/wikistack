const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const db = require('./models');

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
