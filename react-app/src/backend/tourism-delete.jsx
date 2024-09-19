import { useState } from "react";
import axios from "axios";
export default function TourismDelete(){
     return(<>
           <div className="container-fluid bg-light">
                <div className="row">
                     <div className="col-sm-12"></div>
                </div>
                <div className="row">
                     <div className="col-sm-3"></div>
                     <div className="col-sm-6">
                          <TDelete/>   
                     </div>
                     <div className="col-sm-3"></div>
           </div>
               
           </div>
                
     </>);
}

function TDelete(){
      

      let params=new URLSearchParams(document.location.search);
      let delId=params.get("id");
      let delPg=params.get("page");
      let delEntity=params.get("entity"); 
      const[delMsg,setDelMsg]=useState('');
      const[dlId]=useState(delId)
      
      function DelTourism(e){
           e.preventDefault();
           var dlt={
               "n_dlId":dlId
           }
           axios.post("/adminDashboard/tourism/tourism-delete", dlt)
           .then(response=>{
                setDelMsg(response.data);
           })
           .catch(error=>{
                alert(error);
           });

      }
      
      return(<>
           <section className="rounded">
                <span className="small text-danger">{delMsg}</span>
                <h2>Do You Want to Delete the Tourism Entity {delEntity}?</h2>
                <form method="post" onSubmit={DelTourism}>
                    <div className="form-group">
                          <input type="text" className="form-control" name="n_dlId" value={dlId}/>
                    </div>
                    <div className="form-group">
                          <button type="submit" className="submit">Yes, Delete</button>
                     </div>
                </form>
           </section>
      </>);
}