const userModel=require('../models/userModel.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Create Auto Admin

function createautoAdmin(req,res){
     var flg=req.body.flag; 
     var pwd='abc123';
     const salt = bcrypt.genSaltSync(saltRounds);
     const saved_pwd=bcrypt.hashSync(pwd,salt);
     
     if(flg!='1'){
         res.send("Something Went Wrong, Please Try Again.....");
         return;
     }
      
     userModel.countDocuments({}).then(rows=>{
         if(!rows){               
                 createDummyAdmin();                 
                 return;
                                
         }else if(rows>0){
                 res.send("You Are Not A First-Time User. Login With Your Username and Password....."); 
                 return;                
         }

    })
    .catch(error=>{
         res.send(error);
    });

     function createDummyAdmin(){
             var newUser=new userModel({
                     entryDate:'',
                     name:'Auto Admin',
                     username:'admin@admin.com',
                     password:saved_pwd,
                     adminStatus:'Admin',
                     designation:'',
                     address:''    
             }); 
             newUser.save().then(result=>{ 
                         res.send("You Have Freshly Installed The Application.<br/> Your Temporary Username: <b>admin@admin.com</b>, and Password: <b>abc123</b>. <br/>Do Not Refresh.<br/> Details Are Also Available In the Readme File.....");
                       
                      
             })
             .catch(error=>{
                     res.send(error);
             });  
    } 
}
module.exports={
        createautoAdmin
}