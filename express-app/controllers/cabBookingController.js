const cabBookingModel=require('../models/cabBookingModel.js');

async function createCabBooking(req,res){
     var cb=new cabBookingModel({
             tripRequestDate:req.body.n_reqDate,
             tripType:req.body.n_tripType,
             tripPickupDate:req.body.n_pickupDate,
             tripDropDate:req.body.n_dropDate,
             tripPickupTime:req.body.n_pickupTime,
             tripPickupAddress:req.body.n_pickupAddress,
             tripDropAddress:req.body.n_dropAddress,
             tripName:req.body.n_name,
             tripPhone:req.body.n_phone,
             tripEmail:req.body.n_email,
             tripProcessed:req.body.n_processed
     });     
     cb.save().then(result=>{
            console.log(result)
     })
     
    

    

}
//Read Cab Booking
 async function readCabBooking(req,res){
      await cabBookingModel.find({})
      .then(result=>{
          res.json(result);          
      })
      .catch(error=>{
         
      });
     
 }
 //Client Cab Booking Data
 async function clientCabBooking(req,res){
         var cid=req.query.id;
         cabBookingModel.findById(cid)
         .then(result=>{
              res.json(result);
         })
         .catch(error=>{

         });


    

 }

module.exports={
     createCabBooking:createCabBooking,
     readCabBooking:readCabBooking,
     clientCabBooking:clientCabBooking
}