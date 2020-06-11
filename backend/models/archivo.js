const mongoose = require('mongoose');
const {Schema} =mongoose;

const filesShema =new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true },
    path:{type:String }
});
filesShema.method.setFile=function setFile(fileName){
    this.fileURL='http://localhost/public/'+fileName
}



module.exports=mongoose.model('file',filesShema);