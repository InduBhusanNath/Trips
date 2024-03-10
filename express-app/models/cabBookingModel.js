const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');


     const CabBookingSchema=new mongoose.Schema({
         tripRequestDate:String,
         tripType:String,
         tripPickupDate:String,
         tripReturnDate:String,
         tripPickupTime:String,
         tripPickupAddress:String,
         tripDropAddress:String,
         tripName:String,
         tripPhone:String,
         tripEmail:String,
         tripProcessed:String
     });

     const CabBooking=mongoose.model('CabBooking',CabBookingSchema);
     module.exports=CabBooking;