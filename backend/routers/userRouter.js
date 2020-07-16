var User = require('../controllers/userController')

module.exports = (router) => {
    router.get('/api/getUser', User.getUser);
    router.post('/api/loginUser', User.loginUser);
    router.post('/api/addUser', User.addUser);
    router.put('/api/updateUser/:id', User.updateUser);
    router.delete('/api/deleteUser/:id', User.deleteUser);
    router.put('/api/assignEmployee/:id', User.assignEmployee);
    router.put('/api/deAssignEmployee/:id', User.deAssignEmployee);
}
