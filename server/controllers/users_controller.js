const User = require('../models/user')

module.exports = {

  users(req, res) {
    User.find({}).then(users => res.send(users))
  },

  create(req, res) {
    const user = new User(req.body)
   
    user.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send(err))
  }

}