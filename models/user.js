const mongoose = require('mongoose'),
      Schema = mongoose.Schema

mongoose.connect('mongodb://admin:baranov200@ds121349.mlab.com:21349/photo-book')

const userSchema = new Schema({
  email: {type: String, required: true},
  password: String,
  first_name: String,
  last_name: String,
  albums: [{
    name: String,
  }],
  photos: [{
    album: String,
    link: String
  }],
  ava: String
})

const userModel = mongoose.model('User', userSchema)


module.exports = userModel
