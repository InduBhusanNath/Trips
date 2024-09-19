import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function TourismEdit(){
      
      return(<>
          <div className="container">
             <div className="row bg-light">
                 <div className="col-sm-4"></div>
                 <div className="col-sm-4"></div>
                 <div className="col-sm-4"></div>
             </div>
             <div className="row bg-light">
                 <TEdit/>
             </div>
          </div>
      </>);     
    
}

function TEdit(){
     const[mesEditTourism,setMesEditTourism]=useState('');
     const[tourismCategoryEdit,setTourismCategoryEdit]=useState('');
     const[tourismStateEdit,setTourismStateEdit]=useState('');
     const[tourismCountryEdit,setTourismCountryEdit]=useState('');
     const[tourismLocationEdit,setTourismLocationEdit]=useState('');
     const[tourismEntityNameEdit,setTourismEntityNameEdit]=useState('');
     const[tourismFeaturedImageLinkEdit,setTourismFeaturedImageLinkEdit]=useState('');
     const[tourismDescriptionEdit,setTourismDescriptionEdit]=useState('');


     let params=new URLSearchParams(document.location.search);
     let editId=params.get("id");
     let editPg=params.get("page");     

     useEffect(()=>{
         axios.get("/adminDashboard/tourism/tourism-edit?"+"id="+editId)
         .then(response=>{
                 setTourismCategoryEdit(response.data.tourismCategory);
                 setTourismStateEdit(response.data.tourismState);
                 setTourismCountryEdit(response.data.tourismCountry);
                 setTourismLocationEdit(response.data.tourismLocation);
                 setTourismEntityNameEdit(response.data.tourismEntityName);
                 setTourismFeaturedImageLinkEdit(response.data.tourismFeaturedImageLink);
                 setTourismDescriptionEdit(response.data.tourismDescription);
            

         })
         .catch(error => {
                  alert("Something Went Wrong, Please Try Again.....");
        });       
        
     },[]);
     
       
     
     function EditTourismDetails(e){
         e.preventDefault();

         var udtT={
             "editId":editId,
             "n_tourismCategoryEdit":tourismCategoryEdit,
             "n_tourismStateEdit":tourismStateEdit,
             "n_tourismCountryEdit":tourismCountryEdit,
             "n_tourismLocationEdit":tourismLocationEdit,
             "n_tourismEntityNameEdit":tourismEntityNameEdit,
             "n_tourismFeaturedImageLinkEdit":tourismFeaturedImageLinkEdit,
             "n_tourismDescriptionEdit":tourismDescriptionEdit

         }
         axios.post("/adminDashboard/tourism/tourism-update",udtT)
         .then(response=>{
                 setMesEditTourism(response.data);
         })
         .catch(error=>{
                 alert("Error!");
         });
         

     }
     return(<>
        
        <div className="row">
             <div className="col-sm-2"></div>
             <span className="text-danger small">{mesEditTourism}</span>
             <div className="col-sm-10">
                 <form method="post" onSubmit={EditTourismDetails}>
                     <div className="form-group">
                         <select className="form-select" n_name="n_tourismCategoryEdit" value={tourismCategoryEdit} onChange={(e)=>{setTourismCategoryEdit(e.target.value)}}>
                             <option value="0">Select Tourism Category</option>
                             <option value="Adventure">Adventure</option>
                             <option value="Eco">Eco</option>
                             <option value="Historical">Historical</option>   
                         </select>
                        </div>
                        <div className="form-group">
                             <select className="form-select" n_name="n_tourismStateEdit" value={tourismStateEdit} onChange={(e)=>{setTourismStateEdit(e.target.value)}}>
                                 <option value="0">Select State</option>
                                 <option value="Assam">Assam</option>
                                 <option value="Arunachal-Pradesh">Arunachal Pradesh</option>
                                 <option value="Bhutan">Bhutan</option>
                                 <option value="Meghalaya">Meghalaya</option>   
                             </select>
                        </div>
                        <div className="form-group">
                             <select className="form-select" n_name="n_tourismCountryEdit" value={tourismCountryEdit} onChange={(e)=>{setTourismCountryEdit(e.target.value)}}>
                                 <option value="0">Select Country</option>
                                 <option selected value="India">India</option>
                                 <option value="Bhutan">Bhutan</option>
                                  
                             </select>
                        </div>
                        <div className="form-group">
                             <label>Location</label>
                             <input type="text" className="form-control" name="n_tourismLocationEdit" value={tourismLocationEdit} onChange={(e)=>{setTourismLocationEdit(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Entity Name</label>
                             <input type="text" className="form-control" name="n_tourismEntityNameEdit" value={tourismEntityNameEdit} onChange={(e)=>{setTourismEntityNameEdit(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Featured Image Link</label>
                             <input type="text" className="form-control" name="n_tourismFeaturedImageLinkEdit" value={tourismFeaturedImageLinkEdit} onChange={(e)=>{setTourismFeaturedImageLinkEdit(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Tourism Description</label>
                             <textarea className="form-control" name="n_tourismDescriptionEdit" value={tourismDescriptionEdit} onChange={(e)=>{setTourismDescriptionEdit(e.target.value)}}></textarea>
                         </div>

                         
                        <div className="form-group">
                                <button type="submit" className="submit">Edit Tourism Details</button>
                        </div>
   
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
          
     
     </>);
}

