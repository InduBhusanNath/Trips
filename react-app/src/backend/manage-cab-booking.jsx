import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ManageCabBooking(){
      
      const [resMsg,setResMsg]=useState('');
      const [getCabData,setGetCabData]=useState([
           {
                'tripRequestDate':'',
                'tripType':'',
                'tripPickupDate':'',
                'tripDropDate':'',
                'tripPickupTime':'',
                'tripPickupAddress':'',
                'tripDropAddress':'',
                'tripName':'',
                'tripPhone':'',
                'tripEmail':'',
                'tripProcessed':''

           }           
      ]);

      useEffect(()=>{
          axios.get("/adminDashboard/cab-booking-data/")
          .then(response=>{
               setGetCabData(response.data);
          })
      },[]);

      var gcd=getCabData.map(cd=>
                <tr key={cd._id}><td>{cd.tripRequestDate}</td><td>{cd.tripType}</td><td>{cd.tripPickupDate}</td><td>{cd.tripDropDate}</td><td>{cd.tripPickupTime}</td><td>{cd.tripPickupAddress}</td><td>{cd.tripDropAddress}</td><td>{cd.tripName}</td><td>{cd.tripPhone}</td><td><a href={"/adminDashboard/manage-cab-booking/cab-booking-processing/?id="+cd._id}>{cd.tripProcessed}</a></td></tr>
          );

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
                                              <th scope="cols" className="text-center">DROP DATE</th>
                                              <th scope="cols" className="text-center">PICKUP TIME</th>
                                              <th scope="cols" className="text-center">PICKUP ADDRESS</th>
                                              <th scope="cols" className="text-center">DROP ADDRESS</th>
                                              <th scope="cols" className="text-center">CLIENT NAME</th>
                                              <th scope="cols" className="text-center">CLIENT PHONE</th>
                                              <th scope="cols" className="text-center">PROCESSED</th>
                                              
                                         </tr>
                                    </thead>
                                    <tbody>
                                        {gcd}

                                    </tbody>
                               </table>

                          </div>
                     </div>


           </div>    
     
     </>);
}