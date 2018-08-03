const express = require('express');
const morgan = require('morgan');
const models = require('./models');

const app = new express();



const PORT = 1337;

const init = async()=>{
  await models.User.sync();
  await models.Page.sync();
  app.listen(PORT, () => {
    console.log(`Node Server is listening on port + ${PORT}`);
  });
}

init();

Page.belongsTo(User);
User.hasMany(Page);

db.sync();

module.exports = {
  init
}
