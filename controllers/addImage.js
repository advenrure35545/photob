const User = require('../models/user');


module.exports = (req, res) => {
  if(req.files){
    let img_file = req.files.image
    let img_path =  "C:/Users/baran/Documents/photo-book/public/uploads/" + req.files.image.name
    let name = req.files.image.name

    img_file.mv(img_path,  (err) => {
      if(err) return console.log(err)
    })

    User.findByIdAndUpdate(req.user._id, { $push: {photos: {link: req.files.image.name}}}, (err) => {
      if(err) return console.log(err)
      else{
        res.redirect('/feed')
      }
    })
  }
}
