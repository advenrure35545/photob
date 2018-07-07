const User = require('../models/user')

module.exports = (req, res) => {
  let ava_file = req.files.ava
  let ava_path =  "C:/Users/baran/Documents/photo-book/public/uploads/" + req.files.ava.name
  console.log(ava_path)

  ava_file.mv(ava_path,  (err) => {
    if(err) return console.log(err)
  })


  const userInfo = req.body
  userInfo.ava = req.files.ava.name
  const user = new User(userInfo)
  user.save((err) => {
    if(err) return console.log(err)
    else {
      req.login(user,  (err) => {
        if(err) return console.log(err)
        else res.redirect('/feed')
      })
    }
  })
}
