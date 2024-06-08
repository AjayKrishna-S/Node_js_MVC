const express = require('express');
const app = express();
const { engine } = require('express-handlebars')
const {loginPage, dashboard, loginProcess} = require('./controllers/userController')
const path = require('path');


app.engine('hbs',engine({defaultLayout:false,extname:"hbs"}));
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); 

app.get('/',loginPage)
app.get('/dashboard',dashboard)
app.post('/login',loginProcess)

app.listen(8000, ()=>{
    console.log('port 8000 running');
})