const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/foueth.html');
})
app.post('/submit',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    res.send("Data saved");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
   });