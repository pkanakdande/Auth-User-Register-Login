const mongoose=require("mongoose")
const createSchema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }

})

const dbModel=mongoose.model("user",createSchema)
module.exports=dbModel