const express = require('express'),
      Router = express.Router(),
      newUserPost = require('./controllers/newUserPost'),
      newUserGet = require('./controllers/newUserGet'),
      getLogin = require('./controllers/getLogin'),
      postLogin = require('./controllers/postLogin'),
      feed = require('./controllers/feed')
      User = require('./models/user'),
      passport = require('passport'),
      addImage = require('./controllers/addImage');


Router.get('/login', getLogin)
Router.post('/login', passport.authenticate('local', { successRedirect: '/feed', failureRedirect: '/login'}), postLogin)
Router.post('/newUser', newUserPost)
Router.get('/newUser', newUserGet)
Router.get('/feed', feed)
Router.post('/addImage', addImage)


module.exports = Router
