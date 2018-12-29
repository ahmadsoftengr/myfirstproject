const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
    res.render('home.hbs',{
        welcome:'welcome to Home Page Buddy',
        pageTitlee : 'About my Home Page',
        copyf :new Date().getFullYear()
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitlee : 'About my Page',
        copyf :new Date().getFullYear()
    });
});

app.get('/bad',(req,res) => {
    res.send({
        errormessage: 'unable to load json data'
        
    });
    });
app.listen(3000);