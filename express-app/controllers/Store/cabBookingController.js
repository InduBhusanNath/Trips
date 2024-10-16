const cabBookingModel=require('../models/cabBookingModel.js');

async function createCabBooking(req,res){
     var cb=new cabBookingModel({
             tripRequestDate:req.body.n_reqDate,
             tripType:req.body.n_tripType,
             tripPickupDate:req.body.n_pickupDate,
             tripReturnDate:req.body.n_returnDate,
             tripPickupTime:req.body.n_pickupTime,
             tripPickupAddress:req.body.n_pickupAddress,
             tripDropAddress:req.body.n_dropAddress,
             tripName:req.body.n_name,
             tripPhone:req.body.n_phone,
             tripEmail:req.body.n_email,
             tripProcessed:req.body.n_processed
     });     
     cb.save().then(result=>{
              if(result!=null){
                     res.send("Cab Booking Request Received,We Will Get Back to You Shortly.....");
              }            
     }).catch(error=>{
               res.send(error);
     });

     
    

    

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
 //Edit cab Booking
 async function updateCabBooking(req,res){      
       cabBookingModel.findByIdAndUpdate(req.body.n_uid,
                {
                     tripType:req.body.n_tripType,
                     tripPickupDate:req.body.n_pickupDate,
                     tripReturnDate:req.body.n_returnDate,
                     tripPickupTime:req.body.n_pickupTime,
                     tripPickupAddress:req.body.n_pickupAddress,
                     tripDropAddress:req.body.n_dropAddress,
                     tripName:req.body.n_name,
                     tripPhone:req.body.n_phone,
                     tripEmail:req.body.n_email        

                })
                .then(result=>{
                     if(result!=null){
                          res.send("Details Updated.....");
                          console.log(result);

                     }
                })
                .catch(error=>{
                      res.send(error);
                });
       
      

 }
//Get Cab Delete Data
async function getDeleteCabBookingData(req,res){
      cabBookingModel.findById(req.body.id,'_id tripRequestDate tripName')
      .then(result=>{
           res.json({
                 'flag':'1',
                 'result':result
            });
      })
      .catch(error=>{
          res.json({
               'flag':'0',
               'data':[]
          });
      });
       
       

}
//Delete Cab Booking
function deleteCabBookingData(req,res){       
           cabBookingModel.deleteOne({_id:req.body.id})
           .then(result=>{
                 if(result!=null){
                      res.send("Deleted Successfully.....");
                 }
           })
           .catch(error=>{
                     res.send(error);
           });
     

}
module.exports={
      createCabBooking:createCabBooking,
      readCabBooking:readCabBooking,
      clientCabBooking:clientCabBooking,
      updateCabBooking:updateCabBooking,
      getDeleteCabBookingData:getDeleteCabBookingData,
      deleteCabBookingData:deleteCabBookingData
}