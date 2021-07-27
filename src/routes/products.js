var express = require('express');
var router = express.Router();

const {add, detail}= require('../controllers/productsController')

/* GET users listing. */
router.get('/add',add)
router.get('/detail/:id',detail)



module.exports = router;