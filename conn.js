const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/auth-api")
.then(res=>{
    console.log("connect")
})
.catch(res=>{
    console.log("error")
})