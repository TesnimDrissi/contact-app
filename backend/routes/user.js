const express = require('express');
const router =  express.Router();
const { getAll, add , updateUser, deleteUser}= require ('../controllers/users');


router.get('/getAll', getAll)
router.post('/add', add)
router.put('/:id', updateUser)
router.delete('/:id',deleteUser)

module.exports = router
