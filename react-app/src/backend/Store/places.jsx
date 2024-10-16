import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";

export default function Places(){
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
             <div className="col-sm-4"> </div>
             <div className="col-sm-4"> <h1>Places</h1></div>
             <div className="col-sm-4"></div>
         </div>
         <div className="row">
             <div className="col-sm-4"><Link to="/adminDashboard/places/place-write">Write</Link></div>
             <div className="col-sm-4"> </div>
             <div className="col-sm-4"></div>
         </div>
     </>);
}
function Body2(){
     const[msg,setMsg]=useState('');
     const[places,setPlaces]=useState([]);
     const[lastPage,setLastPage]=useState('');
     let params=new URLSearchParams(document.location.search);
     let pg=parseInt(params.get("page"));
     if(!pg||pg<1){
         pg="1";
     }else if(pg<1){
         pg="1";     
     }
     
     
     const nextUrl="?page="+(parseInt(pg)+1);         
     const prevUrl="?page="+(parseInt(pg)-1);
     const lastUrl="?page="+lastPage;
     const firstUrl="?page="+1;
     useEffect(()=>{
        axios.get("/adminDashboard/places?page="+pg)
        .then(response=>{
                 if(response.data.flag==="0"){
                    setMsg("Something Went Wrong, Please Try Again.....");
                 }
                 else{
                    setPlaces(response.data.result);
                    setLastPage(response.data.totalPages);                 
                 }
        })
        .catch(error=>{
             alert(error);
        });
     },[]);
     
      const pList=places.map(pl=>
         <tr key={pl._id}>
             <td>{pl.placeLocation}</td>
             <td>{pl.placeState}</td>
             <td>{pl.placeCountry}</td>
             <td>{pl.placeEntity}</td>
             <td>{pl.uniqueAttraction}</td>
             <td>{pl.placeFeaturedImage}</td>
             <td>{pl.placeDescription}</td>
             <td><a href={"/adminDashboard/places/place-edit?id="+pl._id+"&&"+"page="+pg}>Edit</a></td>
             <td><a href={"/adminDashboard/places/place-delete?id="+pl._id+"&&"+"page="+pg+"&&"+"entity="+pl.placeEntity}>Delete</a></td>
         </tr>
      ); 
     return(<>
         <div className="row">
             
             <div className="col-sm-12">
                 {msg}
                 <table className="table">
                     <thead>
                         <tr>
                             <th scope="col">LOCATION</th>
                             <th scope="col">STATE</th>
                             <th scope="col">COUNTRY</th>
                             <th scope="col">ENTITY</th>
                             <th scope="col">Is UNIQUE ATTRACTION?</th>
                             <th scope="col">FEATURED IMAGE LINK</th>
                             <th scope="col">DESCRIPTION</th>
                             <th scope="col">EDIT</th>
                             <th scope="col">DELETE</th>
                         </tr>
                     </thead>
                     <tbody>
                         {pList}
                     </tbody>
                </table>
                <a href={firstUrl} className="text-decoration-none text-dark">First</a>
                &nbsp;&nbsp;
                <a href={nextUrl} className="text-decoration-none text-dark">Next</a>
                &nbsp;&nbsp;
                <a href={prevUrl} className="text-decoration-none text-dark">Prev</a>
                &nbsp;&nbsp;
                <a href={lastUrl} className="text-decoration-none text-dark">Last</a>

             </div>
             
         </div>
     </>);
}