const userControles={};

//se importa los modelos de user
const userModel= require('../models/user')
const file= require('../models/archivo')
const jwt=require('jsonwebtoken');
const fs = require('fs');

//Metodo post obtener los usuarios
userControles.obtenerUsuario = async (req,res)=>{
    return res.json(await userModel.find());
}

//Metodo post para igresar usuarios
userControles.createUser = async (req,res)=>{
    const {nombreCompleto,email,password}=req.body;
    const usuarioNuevo =new userModel({nombreCompleto,email,password});
    const veri=await userModel.findOne({email});
    if(!veri){
        await usuarioNuevo.save();
        const token=jwt.sign({_id: usuarioNuevo._id}, 'secretKey');
        res.status(200).json(token);
    }
    else{
        return res.status(401).json('Email ya existente');
    }
};
//buscar usuario por id con get
userControles.sesion = async (req,res) =>{
    
    
    const { email, password}  = req.body;
    const usuario = await userModel.findOne({email});
    
    if(!usuario){return res.status(404).json({"razon": 'Email no registrado'});}
    if(usuario.password != password) {return res.status(401).json({"razon":'Password incorrecta'});}
    const token = jwt.sign({_id: usuario._id}, 'secretkey');
    res.status(200).json(token);
};

//Actualizar contraseña del usuario
userControles.cambiarPass= async(req,res)=>{
    const { id } =req.params;
    const usuario = await userModel.findById(id);
    const userAux={
        email: usuario.email,
        password: req.body.password
    }
    await userModel.findByIdAndUpdate(id, {$set: userAux}, {new: true});
    res.json('pass actualizada con exito!')
};
//eliminar usuario

userControles.eliminar =  async (req,res) =>{
    const { id } =req.params;
    await userModel.findByIdAndDelete(id);
    res.json('usuario eliminado con exito');
}

//agregar file

userControles.subirArchivo= async (req, res) => {  
    const {uploads} = req.files;
    const {path,name,type} = (uploads[0]);
    if(type!='application/pdf'){
        fs.unlinkSync(path);
        return res.status(403).json("Archivo no es pdf");
    }
    const usuario= await userModel.findById(req.verificacionID);
    const email=usuario.email;
    const archivoNew= new file({name,email,path});
    console.log(archivoNew)
    await archivoNew.save();
    res.status(200).json("Archivo upload");
}



module.exports=userControles;

