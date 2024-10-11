const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
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



