const userControles={};

//se importa los modelos de user
const userModel= require('../models/user')
const jwt=require('jsonwebtoken');

//Metodo get para obtener los usuarios
userControles.get = async (req,res)=>{
    const users = await userModel.find();

    res.json(users);

    
}

//Metodo post para igresar usuarios
userControles.createUser = async (req,res)=>{
    const {email,password}=req.body;
    const usuarioNuevo =new userModel({email,password});
    const veri=await userModel.findOne({email})
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
    
    if(!usuario){return res.status(401).json('Email no registrado');}
    if(usuario.password == {password}) {return res.status(401).json('Password incorrecta');}
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


module.exports=userControles;

