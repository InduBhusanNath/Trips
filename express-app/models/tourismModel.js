const mongoose=require('mongoose');
const {Schema}=mongoose;

     const tourismSchema=new mongoose.Schema({
         tourismCategory:String,
         tourismState:String,
         tourismCountry:String,
         tourismLocation:String,
         tourismEntityName:String,
         tourismFeaturedImageLink:String,
         tourismDescription:String
         
     });

     const Tourism=mongoose.model('Tourism',tourismSchema);
     module.exports=Tourism;



