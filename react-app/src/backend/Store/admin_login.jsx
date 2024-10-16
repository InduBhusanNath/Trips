import {Helmet} from "react-helmet";
import {useState} from "react";
import { useEffect } from "react";
import { useRef} from "react";
import parse from 'html-react-parser';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


export default function AdminLogin(){     
     return(
             <>             
                 <div className="container-fluid">
                     <TechnicalSeo/>  
                     <CreateDummyUser/>
                     <AllowAcces/>
                 </div>
             </>     );
}

//Technical SEO

function TechnicalSeo(){
     return(<>
         <Helmet>
             <html lang="en"/>
             <title>Admin Login</title>
             <meta name="description" content="Admin Login Page"/>
             <body className="background-lightgoldenrodyellow"/>
         </Helmet>
     </>);
}
   


{/* Create Dummy User for First Login*/}
function CreateDummyUser(){ 
     const[autoUser]=useState('1');
     const[msg1,setMsg1]=useState('Click on the Button to Create a Dummy Username/Password if You Are a First-Time User.')
      var usr={
         "flag":autoUser
      }
      function HandleAutoUser(e){  
         e.preventDefault();    
         axios.post("/adminLogin/create-auto-admin",usr)
         .then(response=>{
             setMsg1(response.data);
         })
         .catch(error=>{
             setMsg1(error);
         });       
      
      }

     
     return(<>
         <div className="row">
                 <div className="col-sm-6">
                         <form method="post" onSubmit={HandleAutoUser}>
                                 <input type="hidden" className="form-control" name="n_autoUser" value={autoUser}/>
                                 <button className="button">Create Dummy Admin User</button>
                         </form>
                         <br/>
                         <span className="small text-danger">{msg1}</span>
                 </div>
                 <div className="col-sm-6"></div>
         </div>        
         
     </>);   

}
//Allow Access

function AllowAcces(){
     const [adminEmail,setAdminEmail]=useState("");
     const [errorAdminEmail, setErrorAdminEmail]=useState("");
     const [adminPassword,setAdminPassword]=useState("");
     const [errorAdminPassword,seterrorAdminPassword]=useState("");
     const [passwordType,setPasswordType]=useState("password");
     const [checked, setChecked]=useState(false);
     const [res,setRes]=useState('');
     const [autousr,setAutousr]=useState('');
     const [sessionUserId, setSessionUserId]=useState('');
     const [sessionAdminStatus,setSessionAdminStatus]=useState('');

     //Show/Hide Password
     function ShowPassword(e){         
         e.preventDefault();        
         if(passwordType==='password'){            
             setChecked(!checked);
             setPasswordType('text');
            return;
        }
        setPasswordType('password');
        setChecked(checked);        
   }
   //Submit Form

   function HandleSubmit(e){
     //Validation 
     e.preventDefault();
     if(!adminEmail){
         setErrorAdminEmail('Please Type Your Username.....');
         return;
     }
     var pwd=adminPassword;
     if(pwd.length==0){
        seterrorAdminPassword("Please Enter Your Password.....");
        return;
     }

     var adm_usr=new FormData();
     adm_usr.append('userName',adminEmail);
     adm_usr.append('userPassword',adminPassword);
     axios({
          method:"post",
          url:"check_admin_user",
          data:adm_usr,
          headers:{'Content-Type':'application/json'}
     })
     .then(response=>{
         var admUserData=response.data;
         if(admUserData.flag=="1"){
             
            setRes("Allowing Access.....");
            setTimeout(()=>{
                window.location.assign("/adminDashboard");
            },2000);
            return;
            
            

         }else if(admUserData.flag=="0"){
              setRes("No Combination of Such Username/Password.....");
              return;
         }else if(admUserData.flag=="1+"){
              setRes("Duplicate Username Suspected.....");
              return;
         }else if(admUserData.flag=="0+"){
             setRes("Type the Correct Password.....");
             return;
         }else if(admUserData.flag=="err"){
             setRes("Errors Detected, Please Try Again.....");
         }
        

     })
     .catch(error=>{
        setRes(error);
     });        
     
      
 }
 
     return(<>
          
                 
                 <div className="row">
                         <div className="col-sm-4"></div>
                         <div className="col-sm-4">
                             <section>
                                     <span className="text-danger small padding10">{autousr}</span>
                             </section>
                             <p>&nbsp;</p>
                             <section className="bg-transparent border border-warning rounded shadow-sm">
                                     <p>&nbsp;</p>                             
                                     <h1>ADMIN LOGIN</h1>
                                     <p>&nbsp;</p>
                                     <span className="text-danger small padding10">{res}</span>
                                             <form method="post" onSubmit={HandleSubmit}>
                                                 <div className="form-group">                        
                                                         <label>EMail</label>
                                                         <input type="email" className="form-control" name="n_adminEmail" value={adminEmail} onChange={(e)=>{setAdminEmail(e.target.value)}}/>
                                                         <span className="text-danger small">{errorAdminEmail}</span>
                                                 </div>
                                                 <br/>
                                                 <div className="form-group">
                                                         <label>Password</label>                               
                                                         <input type="password" className="form-control" name="n_adminPassword" value={adminPassword} onChange={(e)=>{setAdminPassword(e.target.value)}}/>
                                                         <span className="text-danger small">{errorAdminPassword}</span>
                                                 </div>
                                                 <div className="form-check">
                                                         <input type="checkbox" value={checked}  className="form-check-input" name="n_showPassword"  onChange={ShowPassword}/>
                                                         <label>Show Password</label>
                                                 </div>
                                                 <br/>
                                                 <div className="form-group">
                                                         <button  type="submit" className="submit">Go</button>
                                                 </div>                                 
                                             </form>
                             </section>
                             <section>
                                     <br/>
                                     <a href="forgotPassword" className="font font20 text-decoration-none">Forgot Password</a>
                             </section>
                        
                         </div>
                         <div className="col-sm-4"></div>
                 </div>            
          
     
     </>);
}