const mongoose= require('mongoose');

const URI = 'mongodb://localhost/repositorio'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('conectado'))
    .catch(err => console.error(err));
module.exports = mongoose;