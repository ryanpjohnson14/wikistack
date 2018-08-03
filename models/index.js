const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM(
    'open', 'closed')
  }
});




const slugify = (str) => {
  res = str.replace(/\s+/g, '_').replace(/\W/g, '');
  return res;
}

Page.beforeValidate( (page) => {
  page.slug = slugify(page.title);
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});



module.exports = {
  db,
  Page,
  User
};

