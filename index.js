const express = require('express');
const port = 80;
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'))

app.get('/', async function(req, res){
    return res.status(200).render('index.ejs');
})
app.get('/wantRequest', async function(req, res){
    return res.status(200).render('wanttowork');
})
app.listen(port, (err)=>{
    if(err){console.log(`Error: ${err}`)}else{
        console.log(`Click here: http://localhost:${port}`);
    };
});