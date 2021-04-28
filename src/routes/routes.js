const { Router } = require('express');
const router = Router()

const user = require('./UserRotes')


router.get('/', function(req, res, next){
    res.send('Hello World')
});

router.use('/user', user)


module.exports = router;