var {Router} = require('express');
var router = Router();

const UserController = require('../controllers/UserController');

router.post('/register', UserController.register)

router.get('/', (req, res) => {
    res.send(`usuario cheguei na rota de usuario`)
})

module.exports =  router;