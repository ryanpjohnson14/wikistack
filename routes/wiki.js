const express = require('express');
const router = express.Router();
const { addPage, wikiPage } = require('../views');
const { Page, User } = require('../models');

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: null,
    userId: 1
  })

  try {
    const created = await page.save();
    res.status(201);
    res.redirect(`/wiki/${created.slug}`);
  } catch (err) { next(err); }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req,res, next) => {
  const slug = req.params.slug;
  try {
    const page = await Page.find({ where: {slug}, include: [{model: User}]});
    //const author = page.user.name;
    res.send(wikiPage(page));
  } catch (err){ next(err) }
})




module.exports = router;
