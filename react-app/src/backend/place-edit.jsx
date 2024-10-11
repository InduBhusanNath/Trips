import {useEffect, useState} from "react";
import axios from "axios";
export default function PlaceEdit(){
     return(<>
         <div className="container">
             <Edit/>
         </div>
        
     </>);
}

let params=new URLSearchParams(document.location.search);
let pg=parseInt(params.get("page"));
let eid=(params.get("id"));





function Edit(){
    const[msg,setMsg]=useState('');
    const[placeLocationEdit,setPlaceLocationEdit]=useState('');
    const[placeStateEdit,setPlaceStateEdit]=useState('');
    const[placeCountryEdit,setPlaceCountryEdit]=useState('');
    const[placeEntityEdit,setPlaceEntityEdit]=useState('');
    const[uniqueAttractionEdit,setUniqueAttractionEdit]=useState('');
    const[placeFeaturedImageEdit,setPlaceFeaturedImageEdit]=useState('');
    const[placeDescriptionEdit,setPlaceDescriptionEdit]=useState('');
    useEffect(()=>{
        axios.get("/adminDashboard/places/place-edit?id="+eid)
        .then(response=>{
             setPlaceLocationEdit(response.data.placeLocation);
             setPlaceStateEdit(response.data.placeState);
             setPlaceCountryEdit(response.data.placeCountry);
             setPlaceEntityEdit(response.data.placeEntity);
             setUniqueAttractionEdit(response.data.uniqueAttraction);
             setPlaceFeaturedImageEdit(response.data.placeFeaturedImage);
             setPlaceDescriptionEdit(response.data.placeDescription);           

        })
        .catch(error=>{

        });
    },[]);
    function EditPlace(e){
        e.preventDefault();
        var updt={
            "editId":eid,
            "n_placeLocationEdit":placeLocationEdit,
            "n_placeStateEdit":placeStateEdit,
            "n_placeCountryEdit":placeCountryEdit,
            "n_placeEntityEdit":placeEntityEdit,
            "n_uniqueAttractionEdit":uniqueAttractionEdit,
            "n_placeFeaturedImageEdit":placeFeaturedImageEdit,
            "n_placeDescriptionEdit":placeDescriptionEdit   
        };
         axios.post("/adminDashboard/places/place-edit",updt)
         .then(response=>{
              alert(response.data)
         })
         .catch(error=>{
             alert(error);
         });
        
   
   }

    const editForm=<form method="post" onSubmit={EditPlace}>
         <label>Location</label>
         <div className="form-group">
             <input type="text" className="form-control" name="n_placeLocationEdit" value={placeLocationEdit} onChange={(e)=>{setPlaceLocationEdit(e.target.value)}}/>
         </div>
         
         <label>State</label>
         <div className="form-group">         
             <select className="form-select" name="n_placeStateEdit" value={placeStateEdit} onChange={(e)=>{setPlaceStateEdit(e.target.value)}}>
                 <option selected value="0">Choose State</option>
                 <option value="Assam">Assam</option>
                 <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                 <option value="Assam">Delhi</option>
                 <option value="Assam">Meghalaya</option>
             </select>
         </div>
         <label>Country</label>
         <div className="form-group">         
             <select className="form-select" name="n_placeCountryEdit" value={placeCountryEdit} onChange={(e)=>{setPlaceCountryEdit(e.target.value)}}>
                 <option selected value="0">Choose Country</option>
                 <option value="India">India</option>
                 <option value="Bhutan">Bhutan</option>                 
             </select>
         </div>
         <label>Entity Name</label>
         <div className="form-group">
             <input type="text" className="form-control" name="n_placeEntityEdit" value={placeEntityEdit} onChange={(e)=>{setPlaceEntityEdit(e.target.value)}}/>
         </div>
        <label>Is Unique Attraction?</label>
        <div className="form-group">         
            <select className="form-select" name="n_uniqueAttractionEdit" value={uniqueAttractionEdit} onChange={(e)=>{setUniqueAttractionEdit(e.target.value)}}>
                <option selected value="Not_Unique_Attraction">No</option>
                <option value="Unique_Attraction">Yes</option>                                
            </select>
        </div>
        <label>Featured Image Link</label>
        <div className="form-group">
            <input type="text" className="form-control" name="n_placeFeaturedImageEdit" value={placeFeaturedImageEdit} onChange={(e)=>{setPlaceFeaturedImageEdit(e.target.value)}}/>
        </div>
        <label>Place Description</label>
        <div class="form-group">
             <textarea class="form-control" name="n_placeDescriptionEdit" value={placeDescriptionEdit} onChange={(e)=>{setPlaceDescriptionEdit(e.target.value)}} ></textarea>
        </div>
        <div className="form-group">
             <button type="submit" className="submit">Update Place Details</button>
         </div>
    </form>


    
     return(<>
         <div className="row">
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
         </div>
         <div className="row">
             <div className="col-sm-3"></div>
             <div className="col-sm-6">
                 {editForm}
             </div>
             <div className="col-sm-3"></div>
         </div>
         
     </>);

}