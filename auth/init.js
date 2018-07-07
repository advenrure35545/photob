const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      return done(null, user)
    });
  }
))


module.exports = passport
