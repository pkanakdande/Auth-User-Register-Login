const express=require("express")
const app=express();
const dbModel=require("./schema")
const connect=require("./conn")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("helo")
})

app.post("/auth/signup",async(req,res)=>{
    try{
const token=await jwt.sign({id:"6427cab9780ef23821c6e561"},"secret_key")
console.log(token) 
const passwordHash=await bcrypt.hash(req.body.password,10)
const data=await new dbModel({
  
    email:req.body.email,
    password:passwordHash

})

   const data1 =await data.save()
   res.send(data1)  
}

    
    catch(e){
        res.send(e)
    }
})

const securepass=async (password)=>{
    const passwordHash=await bcrypt.hash(password,10)
    // console.log(passwordHash)
}
securepass("pranav@gmail.com")


app.post("/auth/login",async(req,res)=>{
   try{
  const email=req.body.email
   const password=req.body.password

   let useremail=await dbModel.findOne({email:email})
   const passwordMatch=await bcrypt.compare(req.body.password,useremail.password)
   console.log(useremail)
   if(useremail){
    
   if(passwordMatch)
   {
    res.status(201).send("login gotcha")
   }
   else{
    res.send('password invalid')
   }
   }
   else{
    res.send("invalid email")
   }
   
   console.log(passwordMatch)
   }
   catch(e){
    res.send(e)
   }
})




app.listen(4000,()=>{
console.log("run")
})