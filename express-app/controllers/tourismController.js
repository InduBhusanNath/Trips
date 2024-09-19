const tourismModel=require('../models/tourismModel.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const express = require('express');

//Create Tourism Details
function tourismDetailsWrite(req,res){
      var n_tourismCategory=req.body.n_tourismCategory;
      var n_tourismState=req.body.n_tourismState;
      var n_tourismCountry=req.body.n_tourismCountry;
      var n_tourismLocation=req.body.n_tourismLocation;
      var n_tourismEntityName=req.body.n_tourismEntityName;
      var n_tourismFeaturedImageLink=req.body.n_tourismFeaturedImageLink;
      var n_tourismDescription=req.body.n_tourismDescription;
     
     

      var newTourism=new tourismModel({
             tourismCategory:n_tourismCategory,             
             tourismState:n_tourismState,
             tourismCountry:n_tourismCountry,
             tourismLocation:n_tourismLocation,
             tourismEntityName:n_tourismEntityName,
             tourismFeaturedImageLink:n_tourismFeaturedImageLink,
             tourismDescription:n_tourismDescription
      });
      newTourism.save().then(result=>{
            res.send("Tourism Details Saved Successfully.....");
            
      }).catch(error=>{
            res.send("Something Went Wrong, Please Try Again.....");
      });


      
         
}
//Read Tourism
async function tourismDetailsRead(req,res){
       var pageNo=req.query.page; 
       var totalPages;
       var pageLimit=5;
       var offset;
       var totalRows;

       await tourismModel.countDocuments({}).then(rows=>{
            if(rows==="0"){
                   res.json({
                         "flag":"0",
                         "data":[],
                         "totalPages":"0",
                         "totalRows":"0"
                  })
            }else if(rows>0){
                  rowCount(rows);

            }
       })
       .catch(error=>{
            res.json({
                  "flag":"error",
                  "data":[],
                  "totalPages":"0",
                  "totalRows":"0"
           })

       });

            function rowCount(rows){
                   totalRows=rows;
                   totalPages=Math.ceil(totalRows/pageNo);
                   offset=(pageNo-1)*pageLimit;    
                   
                   

                   tourismModel.find({}).skip(offset).limit(pageLimit).sort({tourismCategory:-1})
    
                   .then(result=>{
                         res.json({
                         "flag":"1",
                         "data":result,
                         "totalPages":totalPages,
                         "totalRows":totalRows

                   });
                                      
                   
             })
             .catch(error=>{
                  res.json({
                        "flag":"error",
                        "data":[],
                        "totalPages":"0",
                       "totalRows":"0"
                  });
             }); 
             
             
       }
       


}

//Edit Tourism

async function tourismDetailsEdit(req,res){
       var editId=req.query.id;       
       var result= await tourismModel.findById(editId,'tourismCategory tourismState tourismCountry tourismLocation tourismEntityName tourismFeaturedImageLink tourismDescription').exec();
       if(result){
             res.json({
                   "flag":"1",
                   "tourismCategory":result.tourismCategory,
                   "tourismState":result.tourismState,
                   "tourismCountry":result.tourismCountry,
                   "tourismLocation":result.tourismLocation,
                   "tourismEntityName":result.tourismEntityName,
                   "tourismFeaturedImageLink":result.tourismFeaturedImageLink,
                   "tourismDescription":result.tourismDescription
             });
       }     
       
}  

//Update Tourism

async function tourismDetailsUpdate(req,res){
       var updt={
             "tourismCategory":req.body.n_tourismCategoryEdit,
             "tourismState":req.body.n_tourismStateEdit,
             "tourismCountry":req.body.n_tourismCountryEdit,
             "tourismLocation":req.body.n_tourismLocationEdit,
             "tourismEntityName":req.body.n_tourismEntityNameEdit,
             "tourismFeaturedImageLink":req.body.n_tourismFeaturedImageLinkEdit,
             "tourismDescription":req.body.n_tourismDescriptionEdit
       }
       tourismModel.findByIdAndUpdate(req.body.editId,updt)
       .then(result=>{
             res.send("Updated Successfully.....");
       })
       .catch(error=>{
             res.send("Something Went Wrong, Please Try Again.....");
       });

}


//Delete Tourism
async function tourismDetailsDelete(req,res){      
       var delId=req.body.n_dlId;
       tourismModel.deleteOne({_id:delId}).then(result=>{
            res.send("Deleted Successfully.....");

      })
      .catch(error=>{
            res.send(error);
      });      

}


module.exports={
       tourismDetailsWrite:tourismDetailsWrite,
       tourismDetailsRead:tourismDetailsRead,
       tourismDetailsEdit:tourismDetailsEdit,
       tourismDetailsUpdate:tourismDetailsUpdate,
       tourismDetailsDelete
}
