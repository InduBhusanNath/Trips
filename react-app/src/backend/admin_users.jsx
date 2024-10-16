import {Helmet} from "react-helmet";
import {useState} from "react";
import {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import DateObject from "react-date-object";

export default function AdminUsers(){
       
       return(<>
               <Helmet>
                  <html lang="en"/>
                  <title>Add Admin Users</title>
                  <meta name="description" content="Add Admin Users"/>
                  <body className="background-lightgoldenrodyellow"/>
              </Helmet> 
               <div className="container-fluid">
                      <PostUsers/>
                      <TabulateUsers/>
               </div>
               
           
          </>);
}

//Post Users
function PostUsers(){
        var dt = new DateObject();
        var cdate=dt.format("YYYY-MM-DD");
        
        const [visibility_AddUserForm,setVisibility_AddUserForm]=useState('hidden');
        const [entryDate,setEntryDate]=useState(cdate);
        const [name,setName]=useState('');
        const [errorName,setErrorName]=useState('');
        const [username,setUsername]=useState('');
        const [errorUsername,setErrorUsername]=useState('');
        const [password,setPassword]=useState('');
        const [errorPassword,setErrorPassword]=useState('');
        const [passwordType,setPasswordType]=useState('password');
        const [chk,setChk]=useState('false');
        const [nonAdmin,setNonAdmin]=useState('Non-Admin');
        const [designation,setDesignation]=useState('');
        const [address,setAddress]=useState('');
        const [showPassword,setShowPassword]=useState('password');
        const [changePassword,setChangePassword]=useState('');
        const [errorChangePassword,setErrorChangePassword]=useState('');
        const [checked,setChecked]=useState(false);

        //Show Admin User Form

        function ShowAdminUserForm(e){
               e.preventDefault();
               setVisibility_AddUserForm('shown');
               return;
        }

        //Hide Admin User Form
        function HideAdminUserForm(e){
               e.preventDefault();
               setVisibility_AddUserForm('hidden');
               return; 
        }
        //Show/Hide Password
        function ShowHidePwd(e){
              setChk(e.target.checked);
              if(chk){
                     setPasswordType('password');
              }
              if(!chk){
                    setPasswordType('text'); 
              }
       }
        //Submit Form
       function handleSubmit(e){
              e.preventDefault();
                     if(!name){
                            setErrorName('Type Your Name.....');
                            return;         
                     }
                     if(!username){
                            setErrorUsername('Type Your UserName.....');
                            return;
                     }
                     if(!password){                            
                            setErrorPassword('Type Your Password.....');
                            return;
                     }
                     
                     var fd1=new FormData();
                     fd1.append('n_entryDate',entryDate);
                     fd1.append('n_name',name);
                     fd1.append('n_username',username);
                     fd1.append('n_password',password);
                     fd1.append('n_nonAdmin',nonAdmin);
                     fd1.append('n_designation',designation);
                     fd1.append('n_address',address);
                     
                     axios({
                           method: 'post',
                           url:'/adminDashboard/adminUsers/user_post',
                           data: fd1,
                           headers: {'Content-Type': 'application/json' }
                           
                         })
                     .then(function (response) {                            
                          alert(response.data);
                         })
                         .catch(function (error) {
                           alert(error);
                         });        
        }

        return(<>
               <div className="row">
                      <div className="col-sm-4">
                             <p>Dashboard &gt;Users</p>
                             <button className="button" onClick={ShowAdminUserForm}>&#10133;&nbsp;Users</button>
                      </div>
                      <div className="col-sm-4"></div>
                      <div className="col-sm-4"></div>
               </div>
               
               <div className={visibility_AddUserForm}>
                     <section className="popup">
                         <button className="hide_btn" onClick={HideAdminUserForm} >&#10060;</button>
                         
                         <h5>ADD USERS</h5>  
                         <form method="post" onSubmit={handleSubmit}>
                              <input type="text" name="n_entryDate" value={entryDate}/>
                              <div className="form-group">
                                     <label>Name</label>
                                     <input type="text" className="form-control" name="n_name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                     <span className="text-danger small">{errorName}</span>       
                              </div>
                              <div className="form-group">
                                     <label>EMail/Username</label>
                                     <input type="email" className="form-control" name="n_username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                                     <span className="text-danger small">{errorUsername}</span>       
                              </div>
                              <div className="form-group">
                                     <label>Password</label>
                                     <input type={passwordType} class="form-control" name="n_password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                                     <span className="text-danger small">{errorPassword}</span>       
                              </div>
                              <div className="form-group">
                                     <input type="checkbox" checked={chk} onClick={ShowHidePwd}/>
                                     <label>&nbsp;Show Password</label> 
                              </div>
                              <div className="form-group">
                                     <label>Admin Status</label>
                                     <input type="text" className="form-control" name="n_adminStatus" value={nonAdmin} readonly/>       
                              </div>
                              <div className="form-group">
                                     <label>Designation</label>
                                     <input type="text" className="form-control" name="n_designation" value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/>       
                              </div>
                              <div className="form-group">
                                     <label>Address</label>
                                     <textarea  className="form-control" name="n_address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                              </div>
                              <br/>
                              <div className="form-group">
                                     <button type="submit" className="submit">ADD USER</button>
                              </div>

                         </form>                    
                     
                     </section>  
                    
                 </div>
       </>);

}

//Tabulate Users {/*
function TabulateUsers(){
       const [users,setUsers]=useState([]);
       const urlprms=new URLSearchParams(window.location.search);
       const page_no=urlprms.get("page");
      
       const [pageNo,setPageNo]=useState(page_no);
       const [privilegeId,setPrivilegeId]=useState('');
       const [changeAdminStatus,setChangeAdminStatus]=useState('');
       const [visibility_PrivilegeUserForm,setVisibility_PrivilegeUserForm]=useState('hidden');

       var pg;
       var url_prev;
       var url_next;
       if(page_no==null){
              pg=1;
              url_next='/adminDashboard/adminUsers?page='+(parseInt(pg)+1); 
       }else{
              pg=pageNo;
              if(pg==='1'){
                     url_next='/adminDashboard/adminUsers?page='+(parseInt(pg)+1);
              }else{
                     url_prev='/adminDashboard/adminUsers?page='+(parseInt(pg)-1);
                     url_next='/adminDashboard/adminUsers?page='+(parseInt(pg)+1);
              }
             
       
      } 
      useEffect(()=>{
          
             axios.get('/adminDashboard/adminUsers?page='+pg).then(response=>{
                      if(Array.isArray(response.data)){
                             setUsers(response.data);  
                             alert("yes")
                      }else{
                            setUsers([]); 
                      }
                     
                           
                     
                     
                 
             }).catch(function(error){
                 alert(error);
             });
         
        },[]);
        //Assign User Privileges
       function PrivilegeUser(e){
              e.preventDefault();
              var p_id=e.target.name;
              var fd_usr_priv=new FormData();
              fd_usr_priv.append("priv_Id",p_id);

             
             axios({
                     method:"post",
                     url:"/adminDashboard/adminUsers/user_priviledge_data",
                     data:fd_usr_priv,
                     headers:{'Content-Type':'application/json'}
             })
             .then(response=>{                     
                   
                    var uPrivData=response.data;  
                    setPrivilegeId(uPrivData._id);
                    setChangeAdminStatus(uPrivData.adminStatus);        
                    
                    
                                

             })
             .catch(error=>{
                   alert(error);
             });
             


             
      }
      function EditUsers(){

      }
       function DeleteUserData(){

       }

       
      
       
      
       
       
       
       
       var us=users.map(u=>
              <tr key={u._id}>
                     <td className="text-center"><a href='javascript:void(0);' name={u._id} onClick={PrivilegeUser}>&#10012;</a></td>
                     <td className="text-center">{u.entryDate}</td>
                     <td className="text-center">{u.name}</td>
                     <td className="text-center">{u.username}</td>
                     <td className="text-center">{u.adminStatus}</td>
                     <td className="text-center">{u.designation}</td>
                     <td className="text-center">{u.address}</td>
                     <td className="text-center"><a href='javascript:void(0);' name={u._id} onClick={EditUsers}>&#128393;</a></td>
                     <td className="text-center"><a href='javascript:void(0);' name={u._id} onClick={DeleteUserData}>&#10060;</a></td>
                                                  
              </tr>
              
       );                                            



       return(<>
             <div className="row">
                     <div className="col-sm-12">
                            <section>
                                   <table className="table">
                                          <thead>
                                                 <tr>
                                                        <th scope="col" className="text-center">Priviledge</th>
                                                        <th scope="col" className="text-center">Date</th>
                                                        <th scope="col" className="text-center">Name</th>
                                                        <th scope="col" className="text-center">Username</th>
                                                        <th scope="col" className="text-center">Admin Status</th>
                                                        <th scope="col" className="text-center">Designation</th>
                                                        <th scope="col" className="text-center">Address</th>
                                                        <th scope="col" className="text-center">Update</th>
                                                        <th scope="col" className="text-center">Delete</th>

                                                 </tr>
                                          </thead>
                                          <tbody>
                                                {us}  
                                          </tbody>

                                   </table>
                    
                            </section>                     
                   <a href={url_prev}>Prev</a> <a href={url_next}>Next</a>
             </div>
           </div>
       
       </>);
}