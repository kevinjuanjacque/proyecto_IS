const express=require('express');
const router = express.Router();

const user = require('../controller/user.controles');
router.get('/',user.get);
router.post('/',user.createUser);
router.get('/:id',user.getUser);
router.put('/:id',user.cambiarPass);
router.delete('/:id',user.eliminar);

module.exports=router;