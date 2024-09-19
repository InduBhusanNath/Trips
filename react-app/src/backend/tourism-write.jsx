import { useState } from "react";
import axios from "axios";

export default function TourismWrite(){ 
     const[mesWriteTourism,setMesWriteTourism]=useState('');
     const[tourismCategory,setTourismCategory]=useState('0');
     const[tourismState,setTourismState]=useState('0');
     const[tourismCountry,setTourismCountry]=useState('0');
     const[tourismLocation,setTourismLocation]=useState('');
     const[tourismEntityName,setTourismEntityName]=useState('');     
     const[tourismFeaturedImageLink,setTourismFeaturedImageLink]=useState('');
     const[tourismDescription,setTourismDescription]=useState('');

       
       
     function SubmitTourismDetails(e){        
         e.preventDefault();
         if(tourismCategory==="0"){
             setMesWriteTourism('Select a Tourism Category.....');
             return;
        }
         if(tourismState==="0"){
             setMesWriteTourism('Select a State.....');
             return;
         }

        if(tourismCountry==="0"){
             setMesWriteTourism('Select a Country.....');
             return;
        }

        if(!tourismLocation){
             setMesWriteTourism('Enter the Location.....');
             return;
        }

        if(!tourismEntityName){
             setMesWriteTourism('Enter the Entity Name.....');
             return;
        }

        if(!tourismDescription){
             setMesWriteTourism('Type the Description.....');
             return;
        }

        if(!tourismFeaturedImageLink){
             setMesWriteTourism('Insert Featured Image Link.....');
             return;

        }
         
         var tourismWrite={
             "n_tourismCategory":tourismCategory,
             "n_tourismState":tourismState,
             "n_tourismCountry":tourismCountry,
             "n_tourismLocation":tourismLocation,
             "n_tourismEntityName":tourismEntityName,
             "n_tourismFeaturedImageLink":tourismFeaturedImageLink,
             "n_tourismDescription":tourismDescription             
         }       
         
                 
         
         
         
         

         axios.post("/create-tourism-details/",tourismWrite)
         
         .then((response)=>{
            setMesWriteTourism(response.data);
         })
         .catch(error=>{
            setMesWriteTourism("error");
        }); 
     }
 
   function ComposeTourism(){
        return(<>
            <div className="row">
                <div className="col-sm-2"></div>
                <span className="text-danger small">{mesWriteTourism}</span>
                <div className="col-sm-10">
                    <form method="post" onSubmit={SubmitTourismDetails}>
                        <div className="form-group">
                             <select className="form-select" n_name="n_tourismCategory" value={tourismCategory} onChange={(e)=>{setTourismCategory(e.target.value)}}>
                                 <option value="0">Select Tourism Category</option>
                                 <option value="Adventure">Adventure</option>
                                 <option value="Eco">Eco</option>
                                 <option value="Historical">Historical</option>   
                             </select>
                        </div>
                        <div className="form-group">
                             <select className="form-select" n_name="n_tourismState" value={tourismState} onChange={(e)=>{setTourismState(e.target.value)}}>
                                 <option value="0">Select State</option>
                                 <option value="Assam">Assam</option>
                                 <option value="Arunachal-Pradesh">Arunachal Pradesh</option>
                                 <option value="Bhutan">Bhutan</option>
                                 <option value="Meghalaya">Meghalaya</option>   
                             </select>
                        </div>
                        <div className="form-group">
                             <select className="form-select" n_name="n_tourismCountry" value={tourismCountry} onChange={(e)=>{setTourismCountry(e.target.value)}}>
                                 <option value="0">Select Country</option>
                                 <option selected value="India">India</option>
                                 <option value="Bhutan">Bhutan</option>
                                  
                             </select>
                        </div>
                        <div className="form-group">
                             <label>Location</label>
                             <input type="text" className="form-control" name="n_tourismLocation" value={tourismLocation} onChange={(e)=>{setTourismLocation(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Entity Name</label>
                             <input type="text" className="form-control" name="n_tourismEntityName" value={tourismEntityName} onChange={(e)=>{setTourismEntityName(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Featured Image Link</label>
                             <input type="text" className="form-control" name="n_tourismFeaturedImageLink" value={tourismFeaturedImageLink} onChange={(e)=>{setTourismFeaturedImageLink(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <label>Tourism Description</label>
                             <textarea className="form-control" name="n_tourismDescription" value={tourismDescription} onChange={(e)=>{setTourismDescription(e.target.value)}}></textarea>
                         </div>

                         
                        <div className="form-group">
                                <button type="submit" className="submit">Submit Tourism Details</button>
                        </div>
   
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </>);
    }
     
     return(<>
         <div className="container bg-warning">
             <ComposeTourism/>
         </div>     
     </>);
     
  
   
}

