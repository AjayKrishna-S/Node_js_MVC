const express = require('express');
const app = express();
const { engine } = require('express-handlebars')
const path = require('path');
const userRoutes = require('./routes/users')

app.engine('hbs',engine({defaultLayout:false,extname:"hbs"}));
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); 

app.use(userRoutes);

app.listen(8000, ()=>{
    console.log('port 8000 running');
})