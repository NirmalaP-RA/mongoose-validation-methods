// controller connect with color.js
// file name depends on you whatever you want to give name
// here we create ll thes function that is mandatory

const colorModal = require("../../models/Color");

// all the functions created 
exports.create=async(request,response)=>{
    // first of all we create object to pass insert query(run through model)
    // const data={
    //     name:request.body.name,
    //     Code:request.body.code,
    // }
//what if i by name,code dont send value then into database a blank entry send
// let do error handling(on not pass parameters,or on passing parameters,on not checking checkbox but value insertedt code and name value must not be inserted so (do validations)(withou) like name ,id,code etc.)
try{
      const data={
        name:request.body.name,
        Code:request.body.code,
    }
const insertData =new colorModal(data);//pass object
   await insertData.save()//insert query
//    if insert query run then go to then()
.then((result)=>{
const output={
    _status:true,
    _message:"record inserted ",
    _data:result
}
response.send(output);
})
.catch((error)=>{
    var errormessages=[];

     for(err in error.errors){

 errormessages.push(error.errors[err].message);

     }
const output={
    _status:false,
    _message:"something went wrong",
    _data:null,
    _error_messages:errormessages
}
response.send(output);//for api error

})
}catch(error){
   
const output={
    _status:false,
    _message:"something went wrong",
    _data:null
}
response.send(output); //for syntax error
}
   

}
exports.view=async(request,response)=>{
    if(request.body.name){
        var filter={
          name:request.body.name  
        }
    }else{
var filter={};
    }
    await  colorModal.find(filter)
//  const insertData =new colorModal(data);//pass object
//    await insertData.save()//insert query
//    if insert query run then go to then()
.then((result)=>{
    if(result.length>0){
     const output={
    _status:true,
    _message:"record fetched ",
    _data:result
}
response.send(output);
    }else{
const output={
    _status:false,
    _message:"no record fetch ",
    _data:result
}
response.send(output);
    }

})
.catch(()=>{
const output={
    _status:false,
    _message:"something went wrong",
    _data:null
}
response.send(output);

})   
}
exports.details=async(request,response)=>{
    //1st method using findone() function

//   await  colorModal.findOne({
    //id here
    // _id:request.body.id
//   })
//to gete single record thats why length condition dont apply if(result.length>0)
//  const insertData =new colorModal(data);//pass object
//    await insertData.save()//insert query
//    if insert query run then go to then()

//second method fndById()
await colorModal.findById(request.body.id)

.then((result)=>{
    if(result){
     const output={
    _status:true,
    _message:"record fetched ",
    _data:result
}
response.send(output);
    }else{
const output={
    _status:false,
    _message:"no record fetch ",
    _data:result
}
response.send(output);
    }

})
.catch(()=>{
const output={
    _status:false,
    _message:"something went wrong",
    _data:null
}
response.send(output);

})     
}
exports.update=async(request,response)=>{
 // first of all we create object to pass insert query(run through model)
    const data={
        name:request.body.name,
        Code:request.body.code,
    }

  await colorModal.updateOne({
_id:request.body.id

  },{
  $set:data
  }) 
.then((result)=>{
const output={
    _status:true,
    _message:"record updated ",
    _data:result
}
response.send(output);
})
.catch(()=>{
const output={
    _status:false,
    _message:"something went wrong",
    _data:null
}
response.send(output);

})   
}
exports.changeStatus=(request,response)=>{
    
}
exports.destroy=async(request,response)=>{
    await colorModal.deleteOne({
      _id: request.body.id 
    })

.then((result)=>{
//    no condition used here if(result){
     const output={
    _status:true,
    _message:"record delete ",
    _data:result
}
response.send(output);
//     }else{
// const output={
//     _status:false,
//     _message:"no record fetch ",
//     _data:result
// }

// response.send(output);
//     }

})
.catch(()=>{
const output={
    _status:false,
    _message:"something went wrong",
    _data:null
}
response.send(output);

})   
}


