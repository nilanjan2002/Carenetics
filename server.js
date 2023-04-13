//create an express server to handle all the server requests , use port as 3000
var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
const base = `${__dirname}/index.html`

app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(base);
})


app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})