import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./frontend/home_page";
import AboutUs from "./frontend/aboutus";
import DelhiTaxi from "./frontend/delhi-taxi";
import GuwahatiTaxi from "./frontend/guwahati-taxi";
import BlogPage from "./frontend/blog-page";
import ContactUs from "./frontend/contactus";
import AdventureTourism from "./frontend/adventure-tourism";
import EcoTourism from "./frontend/eco-tourism";
import UniqueAttractions from "./frontend/unique-attractions";
import UniqueAttractionsAssam from "./frontend/unique-attractions-assam";

import AdminLogin from "./backend/admin_login";
import AdminDashboard from "./backend/admin_dashboard";
import AdminUsers from "./backend/admin_users";
import ForgotPassword from "./backend/forgot_password";
import Blog from "./backend/blogs";
import WriteBlog from "./backend/write_blog";
import ShowBlog from "./backend/show_blog";
import ContactUsMessage from "./frontend/contactus_message";
import MessagesContactUs from "./backend/contactus_messages";
import ManageCabBooking from "./backend/manage-cab-booking";
import CabBookingProcessing from "./backend/cab-booking-processing";


const router=createBrowserRouter([
  {
     path:"/",
     element:<HomePage/>
  },
  {
   path:"/aboutus",
   element:<AboutUs/>
  },
  {
   path:"/delhi-taxi",
   element:<DelhiTaxi/>
  },
  {
   path:"/guwahati-taxi",
   element:<GuwahatiTaxi/>
  },
  {
   path:"/blog-page",
   element:<BlogPage/>
  },
  {
   path:"/contactus",
   element:<ContactUs/>
  },
  {
   path:"/adventure-tourism",
   element:<AdventureTourism/>
  },
  {
   path:"/eco-tourism",
   element:<EcoTourism/>
  },
  {
     path:"/adminLogin",
     element:<AdminLogin/>
  }, 
  {
   path:"/unique-attractions",
   element:<UniqueAttractions/>,
   children:[
          {
                path:"/unique-attractions/unique-attractions-assam",
                element:<UniqueAttractionsAssam/>
          },
   ],
   },  
  {
    path: "/adminDashboard",
    element: <AdminDashboard/>,
    children:[
      {
         path:"/adminDashboard/adminUsers/",
         element:<AdminUsers/>
      },
      {
        path:"/adminDashboard/blogs/",
        element:<Blog/>

      },
      {
         path:"/adminDashboard/blogs/write_blog/",
         element:<WriteBlog/>

      },      
      {  path:"/adminDashboard/blogs/show_blog/",
         element:<ShowBlog/>
      },
      {  
         path:"/adminDashboard/contactus-messages/",
         element:<MessagesContactUs/>

      }
      

    ]
       
  },
   {  
   path:"/adminDashboard/manage-cab-booking/",
   element:<ManageCabBooking/>
   },
   {  
   path:"/adminDashboard/manage-cab-booking/cab-booking-processing/",
   element:<CabBookingProcessing/>
   },
   {
      path:"/contactus",
      element:<ContactUsMessage/>
   },
    {
     path:"/forgotPassword",
     element:<ForgotPassword/>
   }
   
]);

function App() {
  return (
    <>
       
         <React.StrictMode>
             <RouterProvider router={router} />
         </React.StrictMode>

    
    </>
    
  )
}

export default App;
