var express = require('express');
var bodyParser = require('body-parser');
const session=require('express-session');
const path = require('path');
var app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'../','../','react-app','build')));



 

//var router = express.Router();


app.use(session(
    {
        secret:"orange_cat",
        resave:true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }
   ));


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended:true})); 

var userController=require('../controllers/userController.js');
var adminUserController=require('../controllers/adminUserController.js');
const createUser = require('../controllers/userController.js');
var sessionController=require('../controllers/sessionController.js');
var blogController=require('../controllers/blogController.js');
var contactUsMessageModel=require('../controllers/contactUsMessageController.js');
var autoCreateAdminController=require('../controllers/autoCreateAdminController.js');
var cabBookingController=require('../controllers/cabBookingController.js');
var tourismController=require('../controllers/tourismController.js');
var placesController=require('../controllers/placesController.js');

/* GET*/
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'../','../','react-app','build','index.html'));
});

app.get('/adminLogin/create-auto-admin',autoCreateAdminController.createautoAdmin);
app.get('/adminDashboard/adminUsers',userController.readUsers);
app.get('/admin_session',sessionController.adminSession);
app.get('/admin_logout',sessionController.adminLogOut);
app.get('/adminDashboard/blogs/',blogController.readBlog);
app.get('/adminDashboard/blogs/show_blog',blogController.edit_displayBlog);
app.get('/adminDashboard/contactus-messages/',contactUsMessageModel.readMessages);
app.get('/adminDashboard/cab-booking-data/',cabBookingController.readCabBooking);
app.get('/adminDashboard/manage-cab-booking/cab-booking-processing/get-cab-client-data/',cabBookingController.clientCabBooking);
app.get('/adminDashboard/tourism',tourismController.tourismDetailsRead);
app.get('/adminDashboard/tourism/tourism-edit',tourismController.tourismDetailsEdit);
app.get('/adminDashboard/places',placesController.placeRead);
app.get('/adminDashboard/places/place-edit',placesController.placeEdit);


    


/*POST*/
app.post('/adminDashboard/adminUsers/user_post',userController.createUser);
app.post('/adminDashboard/adminUsers/user_edit_data',userController.editUsersData);
app.post('/adminDashboard/adminUsers/user_edit',userController.editUsers); 
app.post('/adminDashboard/adminUsers/user_delete_data',userController.deleteUserData);
app.post('/adminDashboard/adminUsers/user_delete',userController.deleteUser); 
app.post('/adminDashboard/adminUsers/user_priviledge_data',userController.priviledgeUserData);
app.post('/adminDashboard/adminUsers/user_priviledge_data_change',userController.changeUserPriviledge);
app.post('/change_password',userController.changePassword);
app.post('/change_password_by_user',userController.changePasswordByUser);
app.post('/check_admin_user',adminUserController.checkAdminUser);
//app.post('/adminDashboard/blogs/write_blog/create_blog',upload.single("n_blogpic"),blogController.createBlog);
//app.post('/adminDashboard/blogs/show_blog/update-blog-image',upload.single('edit_n_blogpic'),blogController.edit_blogImage);
app.post('/adminDashboard/blogs/show_blog/delete-blog-image',blogController.delete_blogImage);
app.post('/adminDashboard/blogs/show_blog/update-blog-content',blogController.edit_blogContent);
app.post('/adminDashboard/blogs/show_blog/delete-blog-content',blogController.delete_blogContent);
app.post('/contact-us-message',contactUsMessageModel.visitorMessage);
app.post('/adminDashboard/contactus-messages/delete-message/',contactUsMessageModel.deleteMessage);
app.post('/create-cab-booking/',cabBookingController.createCabBooking);
app.post('/update-cab-booking/',cabBookingController.updateCabBooking);
app.post('/get-delete-cab-booking-data/',cabBookingController.getDeleteCabBookingData);
app.post('/delete-cab-booking-data/',cabBookingController.deleteCabBookingData);
app.post('/create-tourism-details/',tourismController.tourismDetailsWrite);
app.post('/adminDashboard/tourism/tourism-update',tourismController.tourismDetailsUpdate);
app.post('/adminDashboard/tourism/tourism-delete',tourismController.tourismDetailsDelete);
app.post('/adminDashboard/places/place-write',placesController.placeWrite);
app.post('/adminDashboard/places/place-edit',placesController.placeUpdate);
app.post('/adminDashboard/places/place-delete',placesController.placeDelete);




module.exports = app;

