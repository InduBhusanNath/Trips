import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Tourism(){
     return(<>
         <div className="container-fluid bg-light">
             <HeadBar/>   
             <Body1/>
             <Body2/>     
             
         </div>
     </>);
}
function HeadBar(){
     return(<>
         <div className="row padding25">
             <div className="col-sm-4">
                 <a href="/adminDashboard/" className="font font24">&#129152;&nbsp;DASHBOARD</a>
             </div>
             <div className="col-sm-4">
                 <h1>Tourism Management</h1>
             </div>
             <div className="col-sm-4"></div>
         </div>
         
     </>);
}

function Body1(){
     return(<>
         <div className="row">
             <div className="col-sm-4">
                <a href="/adminDashboard/tourism/tourism-write" className="font font24">Write</a>
             </div>
             <div className="col-sm-4"></div>
             <div className="col-sm-4"></div>
         </div>
     </>);
}


function Body2(){
     const[tourismList,setTourismList]=useState([]);
     const[lastPage,setLastPage]=useState('');
     const[tourismCount,setTourismCount]=useState('');

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
          axios("/adminDashboard/tourism?page="+pg)
          .then(response=>{
                 setTourismList(response.data.data);
                 setLastPage(response.data.totalPages);
                 setTourismCount(response.data.totalRows);               
          })
          .catch(error=>{
                 alert(error);
          });
          
     },[]);

     const tList=tourismList.map(tl=>
        <tr key={tl._id}>
            <td>{tl.tourismCategory}</td>
            <td>{tl.tourismState}</td>
            <td>{tl.tourismCountry}</td>
            <td>{tl.tourismLocation}</td>
            <td>{tl.tourismEntityName}</td>
            <td>{tl.tourismFeaturedImageLink}</td>
            <td>{tl.tourismFeaturedImageLink}</td>
            <td><Link to={"/adminDashboard/tourism/tourism-edit?"+"id="+tl._id+"&&"+"page="+pg}>Edit</Link></td>
            <td><Link to={"/adminDashboard/tourism/tourism-delete?"+"id="+tl._id+"&&"+"page="+pg+"&&"+"entity="+tl.tourismEntityName}>Delete</Link></td>          
            
            
       </tr>
    );

    return(
       <>  
            <spam className="bg-danger fw-bold">{tourismCount}</spam>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="font font24">CATEGORY</th>
                        <th scope="col" className="font font24">STATE</th>
                        <th scope="col" className="font font24">COUNTRY</th>
                        <th scope="col" className="font font24">LOCATION</th>
                        <th scope="col" className="font font24">ENTITY</th>
                        <th scope="col" className="font font24">FEATURED IMAGE LINK</th>
                        <th scope="col" className="font font24">DESCRIPTION</th>
                        <th scope="col" className="font font24">EDIT</th>
                        <th scope="col" className="font font24">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {tList}
                </tbody>
            </table>
            <a href={firstUrl}>First Page</a>&nbsp;&nbsp;<a href={prevUrl}>Prev</a>&nbsp;&nbsp;<a href={nextUrl}>Next</a>&nbsp;&nbsp;<a href={lastUrl}>Last</a>
       </>
       
    );
}

