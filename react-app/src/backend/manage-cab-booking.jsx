import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
{/* Page Refresh*/}
function pageRefresh(){
     window.location.reload();
}

export default function ManageCabBooking(){
      
      const [resMsg,setResMsg]=useState('');
      const [delMsg,setDelMsg]=useState('');
      const [getCabData,setGetCabData]=useState([
           {
                'tripRequestDate':'',
                'tripType':'',
                'tripPickupDate':'',
                'tripReturnDate':'',
                'tripPickupTime':'',
                'tripPickupAddress':'',
                'tripDropAddress':'',
                'tripName':'',
                'tripPhone':'',
                'tripEmail':'',
                'tripProcessed':''

           }           
      ]);
      const [dlId,setDlId]=useState('');
      const [visibilityDeletePopup,setVisibilityDeletePopup]=useState('hidden');
      const [delName,setDelName]=useState('');
      const [delDate,setDelDate]=useState('');

      useEffect(()=>{
          axios.get("/adminDashboard/cab-booking-data/")
          .then(response=>{
               setGetCabData(response.data);
          })
      },[]);

      var gcd=getCabData.map(cd=>
                <tr key={cd._id}><td className="text-center">{cd.tripRequestDate}</td><td className="text-center">{cd.tripType}</td><td className="text-center">{cd.tripPickupDate}</td><td className="text-center">{cd.tripReturnDate}</td><td className="text-center">{cd.tripPickupTime}</td><td className="text-center">{cd.tripPickupAddress}</td><td className="text-center">{cd.tripDropAddress}</td><td className="text-center">{cd.tripName}</td><td className="text-center">{cd.tripPhone}</td><td className="text-center"><a href={"/adminDashboard/manage-cab-booking/cab-booking-processing/?id="+cd._id}>{cd.tripProcessed}</a></td><td><button className="action text-center small" name={cd._id} onClick={getDeleteCabBookingInfo}>&#10060;</button></td></tr>
          );

      function getDeleteCabBookingInfo(e){
           var dId=e.target.name;           
           setVisibilityDeletePopup('shown'); 
           axios.post("/get-delete-cab-booking-data/",{'id':dId},{
                headers:{'Content-Type':'application/json'}
           })
           .then(response=>{
                 if(response.data.flag==='1'){
                     setDlId(response.data.result._id);                     
                     setDelName(response.data.result.tripName);   
                     setDelDate(response.data.result.tripRequestDate);
                 }else if(response.data.flag==='0'){
                     setDelMsg("Something Went Wrong, Please Try Again.....");
                 }
           })
           .catch(error=>{
                     setDelMsg(error);
           });
      }
      function deleteCabBookingReq(e){
            e.preventDefault();
            axios.post("/delete-cab-booking-data/",{'id':dlId},{
                     headers:{'Content-Type':'application/json'}
            })
            .then(response=>{
                     setDelMsg(response.data);
            })
            .catch(error=>{
                     setDelMsg(error);
            });

      }
      function hideDeletePopup(){           
           setVisibilityDeletePopup('hidden');
           pageRefresh();
      }

      return(<>
            <div className="container-fluid bg-body">
                     <div className="row padding25">
                               <div className="col-sm-2"></div>
                               <div className="col-sm-8">
                                    <h1>Cab Booking Management</h1>
                               </div>
                               <div className="col-sm-2"></div>
                     </div>
                     <div className="row padding25">
                          <div className="col-sm-12">
                              <span className="small text-danger">{resMsg}</span>
                          </div>
                     </div>
                     <div className="row padding25">
                          <div className="col-sm-12">
                               <table className="table">
                                    <thead>
                                         <tr>
                                              <th scope="cols" className="text-center">REQUEST DATE</th>
                                              <th scope="cols" className="text-center">TRIP TYPE</th>
                                              <th scope="cols" className="text-center">PICKUP DATE</th>
                                              <th scope="cols" className="text-center">RETURN DATE</th>
                                              <th scope="cols" className="text-center">PICKUP TIME</th>
                                              <th scope="cols" className="text-center">PICKUP ADDRESS</th>
                                              <th scope="cols" className="text-center">DROP ADDRESS</th>
                                              <th scope="cols" className="text-center">CLIENT NAME</th>
                                              <th scope="cols" className="text-center">CLIENT PHONE</th>
                                              <th scope="cols" className="text-center">PROCESSED</th>
                                              <th scope="cols" className="text-center">DELETE</th>
                                              
                                         </tr>
                                    </thead>
                                    <tbody>
                                        {gcd}

                                    </tbody>
                               </table>

                          </div>
                     </div>
                     {/*Delete Popup*/}
                     <section className={visibilityDeletePopup}>
                               <div className="popup">
                                    <span className="action" onClick={hideDeletePopup}>&#10060;</span>
                                    <br/>
                                    <span className="small text-danger">{delMsg}</span>
                                    <br/>
                                    <span className="font font22">
                                         Do You Want to Delete the Cab Booking Request by {delName} on {delDate}?
                                         <br/>
                                         <form method="post" onSubmit={deleteCabBookingReq}>
                                             <button type="submit" className="submit">Yes,Delete</button>
                                         </form>
                                    </span>
                                    
                               </div>
                     </section>


           </div>    
     
     </>);
}