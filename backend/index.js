const express =require('express');
const app=express();
const morgan=require('morgan');
const { mongoose } = require('./database')

//setting
app.set('port',process.env.PORT || 3000);

//middleawares
app.use(morgan('dev'));
app.use(express.json());



//routes

app.use(require('./routes/user.routes'));

//strating the server

app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});