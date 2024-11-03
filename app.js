const express = require('express');
const app = express();
const data=require('./mockdata.json')
const places=require('./mockdata2.json')


app.use(express.static('public'));


app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
    res.render('homepage');
});
app.get('/home/places',(req,res)=>{
    res.render('places',{places})
})
app.get('/home/food',(req,res)=>{
    res.render('food',{})
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.get('/home/flights',(req,res)=>{
    res.render('flights',{data})
})