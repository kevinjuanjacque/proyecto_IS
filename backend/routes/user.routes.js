const express=require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const user = require('../controller/user.controles');



//--------------------
const bodyParser = require('body-parser');  
const multipart = require('connect-multiparty');  

const multipartMiddleware = multipart({  

    uploadDir: './files'
});

router.use(bodyParser.json());  
router.use(bodyParser.urlencoded({  
    extended: true
}));

router.post('/images/upload',verificacionToken, multipartMiddleware ,user.subirArchivo);
//******************************************** 





router.get('/api/',user.obtenerUsuario);
router.post('/api/createUser',user.createUser);
router.post('/api/IniciarSesion',user.sesion);
//router.post('/api/IniciarSesion',verificacionToken,user.sesion);
router.put('/:id',user.cambiarPass);
router.delete('/:id',user.eliminar);






function verificacionToken (req,res,next)  {
   
    
    if(!req.headers.authorization){return res.status(401).json('ACCESO DENEGADO PRIMERO DEBES INICIAR SESION')}
    const token = req.headers.authorization.split(' ');
    if(token == 'null'){return res.status(401).json('ACCESO DENEGADO')}
    if(token[0]!='Bearer'){return res.status(401).json('ACCESO DENEGADO, ERROR CON TOKEN')}
    const toke=jwt.decode(token[1].toString(),'secretkey');
    req.verificacionID=toke._id;
    next();
}
module.exports=router;