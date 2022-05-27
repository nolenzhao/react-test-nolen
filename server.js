const express = require("express");
const { use } = require("express/lib/application");
const app = express()
const PORT = process.env.PORT || 5000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')))
app.get('/api', (req,res) =>{
     res.json({message: "this is the api endpoint"})
}) 
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build','index.html'));
})
app.listen(PORT,()=>
{
    console.log(`Server listening on ${PORT}`);
})