const mongoose = require('mongoose');
const {Schema} =mongoose;

const userSchema =new Schema({
    nombreCompleto: {type: String, required:true},
    email: {type: String,required:true},
    password: {type: String, required:true}
});



module.exports=mongoose.model('user',userSchema);