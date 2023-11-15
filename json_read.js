
const fs=require("fs");
fs.readFile("./customer.json",'utf-8',(err,data)=>
{
    if(err){
        console.log(err);
    }
    else{
     try {
        console.log(data);
        const d=JSON.parse(data);
        console.log(d)
     } catch (error) {
        console.log("error in parsing the data");
     }
    }
})