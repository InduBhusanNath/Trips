import { useState } from "react";
import axios from "axios";

export default function PlaceWrite(){
     return(<>
         <div className="container-fluid bg-light">
             <Body1/>
             <Body2/>
         </div>
     </>);
}
function Body1(){
     return(<>
         <div className="row">
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
        </div>      
     </>);        
}







function Body2(){
     const[msg,setMsg]=useState('');
     const[placeLocation,setPlaceLocation]=useState('');
     const[placeState,setPlaceState]=useState('');
     const[placeCountry,setPlaceCountry]=useState('');
     const[placeEntity,setPlaceEntity]=useState('');
     const[uniqueAttraction,setUniqueAttraction]=useState('');
     const[placeFeaturedImage,setPlaceFeaturedImage]=useState('');
     const[placeDescription,setPlaceDescription]=useState('');
     

     function SubmitPlace(e){
         e.preventDefault();
         if(!placeLocation){
             setMsg("Location Cannot Be Empty.....");
             return;
         }
         if(placeState==="0"){
             setMsg("Select State.....");
             return;
         }
         if(!placeCountry){
             setMsg("Select Country.....");
             return;
         } 
         if(!placeEntity){
             setMsg("Entity Name Cannot be Blank.....");
             return;
         }
         if(!placeDescription){
             setMsg("Description Cannot be Blank.....");
             return;

         }
         if(!placeFeaturedImage){
             setMsg("Featured Image Cannot be Blank.....");
             return;
         }

         const sbmt={
             "n_placeLocation":placeLocation,
             "n_placeState":placeState,
             "n_placeCountry":placeCountry,
             "n_placeEntity":placeEntity,
             "n_uniqueAttraction":uniqueAttraction,
             "n_placeFeaturedImage":placeFeaturedImage,
             "n_placeDescription":placeDescription
         }
         axios.post("/adminDashboard/places/place-write",sbmt)
         .then(response=>{
             setMsg(response.data);
             setPlaceLocation('');
             setPlaceState('0');
             setPlaceCountry('0');
             setPlaceEntity('');
             setUniqueAttraction('Not_Unique_Attraction');
             setPlaceFeaturedImage('');
             setPlaceDescription('');



         })
         .catch(error=>{
             alert(error);
         });
         
     }       
   
   
     const writeForm=<form method="post" onSubmit={SubmitPlace}>
             <label>Location</label>
             <div className="form-group">
                 <input type="text" className="form-control" name="n_placeLocation" value={placeLocation} onChange={(e)=>{setPlaceLocation(e.target.value)}}/>
             </div>
             <label>State</label>
             <div className="form-group">         
                 <select className="form-select" name="n_placeState" value={placeState} onChange={(e)=>{setPlaceState(e.target.value)}}>
                     <option selected value="0">Choose State</option>
                     <option value="Assam">Assam</option>
                     <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                     <option value="Assam">Delhi</option>
                     <option value="Assam">Meghalaya</option>
                 </select>
             </div>
             <label>Country</label>
             <div className="form-group">         
                 <select className="form-select" name="n_placeCountry" value={placeCountry} onChange={(e)=>{setPlaceCountry(e.target.value)}}>
                     <option selected value="0">Choose Country</option>
                     <option value="India">India</option>
                     <option value="Bhutan">Bhutan</option>                 
                 </select>
             </div>
             <label>Entity Name</label>
             <div className="form-group">
                 <input type="text" className="form-control" name="n_placeEntity" value={placeEntity} onChange={(e)=>{setPlaceEntity(e.target.value)}}/>
             </div>
             <label>Is Unique Attraction?</label>
                 <div className="form-group">         
                     <select className="form-select" name="n_uniqueAttraction" value={uniqueAttraction} onChange={(e)=>{setUniqueAttraction(e.target.value)}}>
                         <option selected value="Not_Unique_Attraction">No</option>
                         <option value="Unique_Attraction">Yes</option>                                
                     </select>
                 </div>
             <label>Featured Image Link</label>
                 <div className="form-group">
                     <input type="text" className="form-control" name="n_placeFeaturedImage" value={placeFeaturedImage} onChange={(e)=>{setPlaceFeaturedImage(e.target.value)}}/>
                 </div>
             <label>Place Description</label>
                 <div class="form-group">
                     <textarea class="form-control" name="n_placeDescription" value={placeDescription} onChange={(e)=>{setPlaceDescription(e.target.value)}} ></textarea>
                 </div>
         
             <div className="form-group">
                 <button type="submit" className="submit">Submit Place Details</button>
             </div>
     </form>;

     
     return(<>
        <div className="row">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
                 <span className="text-danger small">{msg}</span>
                 <br/>
                 {writeForm}              
             </div>
             <div className="col-sm-4"></div>
         </div> 
     </>);
        
}

