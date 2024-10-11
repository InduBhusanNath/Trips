const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const {Schema}=mongoose;

     const placeSchema=new mongoose.Schema({
         placeLocation:String,
         placeState:String,
         placeCountry:String,
         placeEntity:String,
         uniqueAttraction:String,
         placeFeaturedImage:String,
         placeDescription:String        
         
     });

     const Place=mongoose.model('Place',placeSchema);
     module.exports=Place;


     
             
             
            
            
             



