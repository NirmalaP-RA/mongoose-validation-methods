// in this file we create our schema (key:type) formate
// lets insert data




const mongoose=require('mongoose');
const colorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
    }, //server side validation
    Code:{
        type:String,
         required:[true,'code is required'],
    }, //server side validation
    status:{
     type:Boolean,
     default:true,
    },
      order:{
       type:Number ,
       default:0
    },
      created_at:{
        type:Date,
        default:Date.now()
    },
      updated_at:{
        type:Date, 
        default:Date.now() 
    },
      delete_at:{
        type:Date, 
        default:''
    }
});

const colorModal=mongoose.model('colors',colorSchema);
module.exports=colorModal;