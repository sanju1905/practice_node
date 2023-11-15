const express=require("express");
const app=express();
const bycrypt=require("bcrypt");
const data=[];
app.use(express.json());
// Home route secured with basic authentication
app.get('/',(req, res) => {
    res.send('Welcome to the secured home page!');
});
app.post('/login',async (req,res)=>{
    const {user,password}=req.body;
    const hashpass=await bycrypt.hash(password,10);
    data.push({user,hashpass})
    res.json(data);

})
app.listen(4141, () => {
    console.log(`Server is running on port 4141`);
})