

const express = require('express');

const adminController = require('../controller/index');

const router = express.Router();
router.get('/',adminController.getapp)
router.post('/adduser',adminController.postuser)
router.get('/getdata',adminController.getuser)
router.delete('/deleteuser/:id',adminController.delete)
router.delete('/edituser/:id',adminController.edituser)

module.exports=router