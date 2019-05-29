const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username must be supplied'],
    unique: [true, 'Username is already taken'],
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  number: {
    type: String
  },
  type: {
    type: String 
  },
  status: {
    type: String 
  },
  address: {
    type: String
  }
})


const User = mongoose.model('User', UserSchema)

module.exports = User