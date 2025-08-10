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
        order:request.body.order,
         type:request.body.type,
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
     console.log(error);
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
//     if(request.body.name){
//         var filter={
//           name:request.body.name  //what if we want to extract data on the basis of number of orders,on basis of above price,below  price(range) like above 5 orders,5o orders etc.so we use query methods operators
//         }
//         //equality operators(model.find({same key:'same value'}),comparison operators($gt(greater than),$lt(leess than),$gte(greaterthan equal),$lte)ex:model.find({age:{$gt:18}}),logical operators($and,$or,$not)ex:model.find({$or:[{quantity:{$lt:20}},{price:10}]}),sorting methods
//     }else{
// var filter={};
//     } //dynamic work

//static method: comparison operator
var filter={}; //total value available 
// var filter={
//     order:{
//         $gte:5 //only those value get which is above 5(perform as per requirement by applying comparison operator).all the order erased which have value less than 5
//     }
// }


// var filter={
//     order:{
//       $lte:5//get value less than 5
//     }
// }

//logical operator:where we want check two conditions at a time by usin multiple operator within array
//$and:check both condition
//$or:both condition must be true
//$not:means except this condition give all the other value


//sorting:sort the result in ascnding or descending order based on a field.
// model.find().sort({name:'asc'}); applied as like below

    await  colorModal.find(filter).sort({name:'asc'}).limit(2).skip(2) //for ascending order(sorting),for decendeing do 'desc',we use limit()to get particular number of record,to skip n number of records and show nextrecord we use skip() function 
    //limit(),skip() use to call paginationex:model.find().limit(10).skip(5);
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


