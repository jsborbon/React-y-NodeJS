const mongoose=require('mongoose');

URI=('mongodb://127.0.0.1/ensayo');

mongoose.connect(URI).then(console.log('Base de datos conectada'))
.catch(error=>console.log(error));

module.exports=mongoose;