const express=require('express');
const { connection } = require('mongoose');
const path=require('path');
const app=express();
const http=require('http').Server(app)
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'src/basic.html'))
})
const io=require('socket.io')(http);
io.on(connection,socket=>{
console.log("User connected");

socket.on('disconnect',()=>
{
    console.log("User disconnected");
})
})


app.listen(3000,()=>
{
    console.log("Server running at 3000");
})