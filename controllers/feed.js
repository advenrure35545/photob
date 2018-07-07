const User = require('../models/user')


module.exports = (req, res) => {
  if(!req.isAuthenticated()) res.redirect('/login')
  User.findById(req.user._id, (err, user) => {
    if(err) return console.log(err)
    else{
      res.render('feed', {user: user})
    }
  })
}
