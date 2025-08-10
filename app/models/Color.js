// in this file we create our schema (key:type) formate
// lets insert data




const mongoose=require('mongoose');
const colorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        match:/^[a-zA-Z 0-9]{2,4}$/, //to check email value
        validate:{
            validator:async function(v){
                const user=await this.constructor.findOne({name:v});
                return !name;
            },
            message:props=>'the specifid name is already in use.'
        },//this condition applieed for checking name tht is already having item or not
        minLength:[3,'minimum length must be 3 character'],
        maxLength:[15,'maximum length must be 15 character']

    }, //server side validation
    Code:{
        type:String,
         required:[true,'code is required'],
    }, //server side validation
    type:{
     type:String,
     enum:['Top','Trending'],
    },
    status:{
     type:Boolean,
     default:true,
    },
      order:{
       type:Number ,
       default:0,
       min:[0,'minimum value must be greater than 0'],
       max:[1000,'maximum value must be less than 1000']
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