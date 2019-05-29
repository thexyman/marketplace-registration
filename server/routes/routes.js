const UsersController = require('../controllers/users_controller')

module.exports = app => {
  app.get('/users', UsersController.users)
  app.post('/users', UsersController.create)
}