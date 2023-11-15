const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use((req,res,next)=>{
    res.status(400).send("Page not found");
})

app.listen(3000,()=>
{
    console.log("Server running at 3000");
})