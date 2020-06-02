const mongoose = require('mongoose');
const {Schema} =mongoose;

const archivoSchema =new Schema({
    user: {type: String,required:true},
    archivo: {type: File, required:true}


});

module.exports=mongoose.model('archivos',archivoSchema);