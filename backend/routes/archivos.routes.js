const express=require('express');
const router = express.Router();

const archivos = require('../controller/archivos.controles');
router.get('/', archivos.get);

module.exports=router;