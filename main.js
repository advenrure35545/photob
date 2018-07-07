const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser')
      config = require('./config'),
      hbs = require('hbs'),
      Router = require('./router'),
      fileUpload = require('express-fileupload'),
      session = require('express-session'),
      passport = require('passport')

const app = express()

app.use(express.static('public'))
app.use(express.static('frontend/dist'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// parse application/x-www-form-urlencoded
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true, cookie: {maxAge: 90000} }))
app.use(passport.initialize())
app.use(passport.session())

//passport-js
require('./auth/init')

app.use('/', Router)


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
