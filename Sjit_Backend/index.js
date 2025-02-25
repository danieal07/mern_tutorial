 const Signup=require('./models/SignupSchema')
const express=require("express");

const mdb=require('mongoose');
const dotenv=require('dotenv')

const app=express()
app.use(express.json())
const PORT=3001
dotenv.config()

console.log(process.env.MONGODB_URL);
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Mongo db connection succesfull")
}).catch((err)=>{
    console.log("check your connection String",err);
})

app.get("/static", (req,res)=>{
    res.sendFile("/Users/danieal/Downloads/sjit2025mern/sjitfrontend/index.html")
})
 
app.post("/signup",(req,res)=>{
    try{
    const{firstName,lastName,email,password,phoneNumber}=req.body
    const newSignup=new Signup({
    firstName:"danieal",
    lastName:"A",
    email:"daniealantony@gmail.com",
    password:"1234",
    phoneNumber:7200062860,
    })  
    newSignup.save();
    console.log("signup succesfully")
    res.status(201).json({message:"signup succesful",isSignup:true})
    } 
   catch(error){
       console.log(error);
       res.status(201).json({message:"signup unsuccesful",isSignup:false})
   }
});


app.listen(PORT,()=>console.log("Server Started Succesfully"));