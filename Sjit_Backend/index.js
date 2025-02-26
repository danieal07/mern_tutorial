const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Signup = require("./models/signupSchema.js");
const app = express();
app.use(express.json());
const PORT = 3001;
dotenv.config();

mdb
  .connect(process.env.MONGODB_URL) 
  .then(() => {
    console.log("MDB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});
app.get("/static", (req, res) => {
  res.sendFile(
    "/Users/danieal/Downloads/sjit2025mern/sjitfrontend/dist/index.html"
  );
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup Unsuccessful", isSignUp: false });
  }
});

app.post("/login", async(req,res)=>{
  try{
    const {email,password}=req.body
    const existingUser = await Signup.findOne({email:email})
    console.log(existingUser)
    if(existingUser){
      const isValidPassowrd = await bcrypt.compare(password,existingUser.password)
      console.log(isValidPassowrd)
      if(isValidPassowrd){
        res.status(201).json({message:"login SUccessful",isLoggedin:true})
      }else{
        res.status(201).json({message:"Incorrect Password",isLoggedin:false})
      }
    }else{
      res.status(201).json({message:"Account Not found"})
    }
  }catch(error){
    console.log("Login Error");
    res.status(400).json({message:"Login Error",isLoggedin: false})
  }
})

app.get('/getsignupdet',async(req,res)=>{
  const signup = await Signup.findOne()
  console.log(signup)
  res.json({message:"Details fetched"})
})


app.listen(PORT, () => {
  console.log("Server Started Successfully");
});
