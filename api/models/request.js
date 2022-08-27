const mongoose=require("mongoose")
const requestSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    homeaddress:{
        type:String,
        required:true
    },
    picked:{
        type:Boolean,
        required:true
    },
    userid:{
        type:String,
        unique:true
    }
    
   
    
    
},
{timestamps:true}
);
module.exports=mongoose.model("request",requestSchema);