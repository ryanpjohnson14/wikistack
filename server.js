const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const { db, Page, User } = require('./models');

const PORT = 3000;

Page.belongsTo(User);
User.hasMany(Page);

const init = async () => {
  await db.sync();
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
