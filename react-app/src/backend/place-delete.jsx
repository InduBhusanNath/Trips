import axios from "axios";
import { useState } from "react";

export default function PlaceDelete(){
     return(<>
         <div className="container">
          <Delete/>
        </div>
     </>);
}
let params=new URLSearchParams(document.location.search);
     let pg=parseInt(params.get("page"));
     let id=params.get("id");
     let entity=params.get("entity");

     
function Delete(){
     const[placeId]=useState(id);
     var did={
         "delId":placeId
     }

     function DelPlace(e){        
         e.preventDefault();
         axios.post("/adminDashboard/places/place-delete",did)
         .then(response=>{
             alert(response.data);
         })
         .catch(error=>{
             alert(error);
         });


     }
var delForm=<form method="post" onSubmit={DelPlace}>
     <div className="form-group">
                 <input type="text" className="form-control" name="n_placeId" value={placeId}/>
     </div>
     <div className="form-group">
         <button type="submit" className="submit">Delete Place Details</button>
     </div>
         
</form>

     return(<>
         <div className="row">
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
         </div>
         <div className="row">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
               Are You Sure to Delete {entity}?
               {delForm}
             </div>
             <div className="col-sm-4"></div>
         </div>

     </>);
}