const fs=require('fs');
const old_file='./old.txt';
const new_file='./new.txt';
fs.writeFile(old_file,"Hello Beautiful Lv u",(err,data)=>
{
    if(err){
        console.log(err)
    }
    else{
        console.log("File Created Successfully");
    }
})


fs.readFile(old_file,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log(data)
        } catch (error) {
           console.log(err); 
        }
    }
})


fs.appendFile(old_file,'Data add chesinam kaaka',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log("Data Appended successfully")
        } catch (error) {
           console.log(err); 
        }
    }
})


fs.readFile(old_file,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log(data)
        } catch (error) {
           console.log(err); 
        }
    }
})

fs.copyFile(old_file,new_file,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log("Copies successfully");
        } catch (error) {
           console.log(err); 
        }
    }
})

fs.readFile(new_file,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log("NEW data");
            console.log(data)
        } catch (error) {
           console.log(err); 
        }
    }
})

const renamed='./renamed.txt';
fs.rename(old_file,renamed,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log("Renamed successfully");
            
        } catch (error) {
           console.log(err); 
        }
    }
})
fs.unlink(new_file,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        try {
            console.log("Deleted successfully");
            
        } catch (error) {
           console.log(err); 
        }
    }
})