const archivoscontroles={};

archivoscontroles.get = (req,res)=>{
    res.json({
        status: 'hello controler'
    });
}

module.exports=archivoscontroles;