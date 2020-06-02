const userControles={};

//se importa los modelos de user
const userModel= require('../models/user')

//Metodo get para obtener los usuarios
userControles.get = async (req,res)=>{
    const users = await userModel.find();
    res.json(users);
}

//Metodo post para igresar usuarios
userControles.createUser = async (req,res)=>{
    const usuarioNuevo =new userModel(req.body);
    await usuarioNuevo.save();
    res.json({
        'status':'usuario agregado'
    });
};
//buscar usuario por id con get
userControles.getUser =async (req,res) =>{
    const id =req.params.id;
    const usuario = await userModel.findById(id);
    res.json(usuario);
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