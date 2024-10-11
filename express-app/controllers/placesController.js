const placesModel=require('../models/placesModel');


//Create Place
async function placeWrite(req,res){
     var newPlace=new placesModel({
         placeLocation:req.body.n_placeLocation,
         placeState:req.body.n_placeState,
         placeCountry:req.body.n_placeCountry,
         placeEntity:req.body.n_placeEntity,
         uniqueAttraction:req.body.n_uniqueAttraction,
         placeFeaturedImage:req.body.n_placeFeaturedImage,
         placeDescription:req.body.n_placeDescription
     });
     var result=await newPlace.save();
     if(!result){
         res.send("Something Went Wrong, Please Try Again.....");
     }else{
         res.send("Data Saved Successfully.....");
     }
    
     
}
async function placeRead(req,res){
    var pageNo=req.query.page; 
    var totalPages;
    var pageLimit=1;
    var offset;
    var rows=await placesModel.countDocuments({}).exec();
     totalPages=Math.ceil(rows/pageNo);
     offset=(pageNo-1)*pageLimit; 
     placesModel.find({}).skip(offset).limit(pageLimit).sort({placeEntity:-1})
     .then(result=>{
         res.json({
             "flag":"1",
             "result":result,
             "totalPages":totalPages
         }); console.log(pageNo)
     })
     .catch(error=>{
         res.json({
             "flag":"0",
             "result":[],
             "totalPages":"0"
         });
     });

}
//Edit Data
async function placeEdit(req,res){
     var editId=req.query.id;
     var result= await placesModel.findById(editId,'placeLocation placeState placeCountry placeEntity uniqueAttraction placeFeaturedImage placeDescription').exec();
     if(result){
         res.json({
             "placeLocation":result.placeLocation,
             "placeState":result.placeState,
             "placeCountry":result.placeCountry,
             "placeEntity":result.placeEntity,
             "uniqueAttraction":result.uniqueAttraction,
             "placeFeaturedImage":result.placeFeaturedImage,
             "placeDescription":result.placeDescription

         });
     }
}
//Update Place Data
async function placeUpdate(req,res){
      var updt={
             "placeLocation":req.body.n_placeLocationEdit,
             "placeState":req.body.n_placeStateEdit,
             "placeCountry":req.body.n_placeCountryEdit,
             "placeEntity":req.body.n_placeEntityEdit,
             "uniqueAttraction":req.body.n_uniqueAttractionEdit,
             "placeFeaturedImage":req.body.n_placeFeaturedImageEdit,
             "placeDescription":req.body.n_placeDescriptionEdit
      }; 

      var result=await placesModel.findByIdAndUpdate(req.body.editId,updt).exec();
      res.send(result.placeDescription);
}
//Delete Place
async function placeDelete(req,res){
         res.send(req.body.delId);
}

module.exports={
     placeWrite,
     placeRead,
     placeEdit,
     placeUpdate,
     placeDelete

};