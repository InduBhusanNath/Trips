import { useEffect, useState } from "react";
import axios from "axios";

const params=new URLSearchParams(document.location.search);
const pid=params.get("id");

export default function CabBookingProcessing(){
      
      return(<>
           <div className="container-fluid">
                <EditCabData/>
               
           </div>
      </>);
}

{/*Edit Data*/}
function EditCabData(){
      const [showEdit,setShowEdit]=useState('hidden');
      const [hideEdit,setHideEdit]=useState('shown');
      
      const [tripType,setTripType]=useState('');
      const [oneWayChecked,setOneWayChecked]=useState(false);
      const [roundWayChecked,setroundWayChecked]=useState(false);
      const [tripTypeMsg,setTripTypeMsg]=useState('');
      const [pickupDate,setPickupDate]=useState('');
      const [pickupDateMsg,setPickupDateMsg]=useState('');
      const [readOnlyPickupDate,setReadOnlyPickupDate]=useState(false);
      const [dropDate,setDropDate]=useState('');
      const [dropDateMsg,setDropDateMsg]=useState('');
      const [readOnlyDropDate,setReadOnlyDropDate]=useState(false);
      const [pickupTime,setPickupTime]=useState('');
      const [pickupAddress,setPickupAddress]=useState('');
      const [pickupAddressMsg,setPickupAddressMsg]=useState('');
      const [dropAddress,setDropAddress]=useState('');
      const [dropAddressMsg,setDropAddressMsg]=useState('');
      const [name,setName]=useState('');
      const [nameMsg,setNameMsg]=useState('');
      const [phone,setPhone]=useState('');
      const [phoneMsg,setPhoneMsg]=useState('');
      const [email,setEmail]=useState('');

      useEffect(()=>{
           axios.get("/adminDashboard/manage-cab-booking/cab-booking-processing/get-cab-client-data/?id="+pid)
           .then(response=>{
                setTripType(response.data.tripType);
                setPickupDate(response.data.tripPickupDate);
                setDropDate(response.data.tripDropDate);
                setPickupTime(response.data.tripPickupTime);
                setPickupAddress(response.data.tripPickupAddress);
                setDropAddress(response.data.tripDropAddress);
                setName(response.data.tripName);
                setPhone(response.data.tripPhone);
                







               

           })
           .catch(error=>{

           });
      },[]);



      {/* Post Edit Data*/}

         function submitCabForm(e){
          e.preventDefault();
          if(oneWayChecked===false && roundWayChecked===false){
                  setTripTypeMsg('Select Your Trip Type.....');
                  return;
          }
          if(!pickupDate){
                  setPickupDateMsg('Select Your Pickup Date.....');
                  return;
          }
          if(tripType==='roundWay' && !dropDate){
                  setDropDateMsg('Select Your Drop Date.....');
                  return;
          }
          if(!pickupAddress){
                  setPickupAddressMsg('Type Your Pickup Address.....');
                  return;                 
          }
          if(!dropAddress){
                  setDropAddressMsg('Type Your Drop Address.....');
                  return;                        
          }
          if(!name){
                  setNameMsg('Type Your Name.....');
                  return;                         
          }
          if(!phone){
                  setPhoneMsg('Type Your Phone No.....');
                  return;
          }

          var post_data={
                  
                  "n_tripType":tripType,
                  "n_pickupDate":pickupDate,
                  "n_pickupTime":pickupTime,
                  "n_dropDate":dropDate,
                  "n_pickupAddress":pickupAddress,
                  "n_dropAddress":dropAddress,
                  "n_name":name,
                  "n_phone":phone,
                  "n_email":email,
                  "n_processed":'No'
          }

          axios.post('/create-cab-booking/',post_data,{
                 headers:{'Content-Type':'application/JSON'}
          })
          .then(response=>{
                 alert(response.data)
          })
          .catch(error=>{
                 alert(error)
          });


          
          
  }
{/*Get Booking Details*/}
function ShowCabData(){

}
      
      return(<>
                <div className="row">
                    <div className="col-sm-12">
                         <button className="button" onClick={()=>{setShowEdit('shown');}}>Update</button>
                    </div>
               </div>
                <div className="row">
                     <div className="col-sm-3"></div>
                     <div className="col-sm-6">
                          <section className={showEdit} >
                                    <div className="popup">
                                         <span className={hideEdit} onClick={()=>{setShowEdit('hidden');}}><span className="hide_btn">&#10060;</span></span>
                                         <form method="post" onSubmit={submitCabForm}>
                               
                                              <label>Trip Type&#42;</label>
                                              <div className="form-check">
                                                   <input className="form-check-input" type="radio" name="n_oneWay" checked={oneWayChecked} value="oneWay" onChange={(e)=>{setOneWayChecked(true);setroundWayChecked(false);setReadOnlyDropDate(true);setDropDate('NA');setTripType(e.target.value);}}/>
                                                   <label>One Way</label>
                                              </div>
                                              <div className="form-check">
                                                   <input className="form-check-input" type="radio" name="n_roundWay" checked={roundWayChecked} value="roundWay" onChange={(e)=>{setOneWayChecked(false);setroundWayChecked(true);setReadOnlyDropDate(false);setTripType(e.target.value);}}/>
                                                   <label>Round Way</label>
                                              </div>
                                              <span className="small text-danger">{tripTypeMsg}</span>
                                              <div className="form-group">
                                                   <label>Pickup Date&#42;</label>
                                                   <input className="form-group" type="date" name="n_pickupDate" value={pickupDate} readOnly={readOnlyPickupDate} onChange={(e)=>{setPickupDate(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{pickupDateMsg}</span>
                                              <div className="form-group">
                                                   <label>Drop Date&#42;</label>
                                                   <input className="form-group" type="date" name="n_dropDate" value={dropDate} readOnly={readOnlyDropDate} onChange={(e)=>{setDropDate(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{dropDateMsg}</span>
                                              <div className="form-group">
                                                   <label>Pickup Time</label>
                                                   <input className="form-group" type="text" name="n_pickupTime" value={pickupTime} placeholder="For Example:7.30 AM....." onChange={(e)=>{setPickupTime(e.target.value);}}/>
                                              </div>
                                              <div className="form-group">
                                                   <label>Pickup Address&#42;</label>
                                                   <textarea className="form-group" name="n_pickupAddress" value={pickupAddress} onChange={(e)=>{setPickupAddress(e.target.value);}} />
                                              </div>
                                              <span className="small text-danger">{pickupAddressMsg}</span>
                                              <div className="form-group">
                                                   <label>Drop Address&#42;</label>
                                                   <textarea  className="form-control" name="n_dropAddress" value={dropAddress} onChange={(e)=>{setDropAddress(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{dropAddressMsg}</span>
                                              <div className="form-group">
                                                   <label>Name&#42;</label>
                                                   <input className="form-group" type="text" name="n_name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{nameMsg}</span>
                                              <div className="form-group">
                                                   <label>Phone&#42;</label>
                                                   <input className="form-group" type="text" name="n_phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                              </div>
                                              <span className="small text-danger">{phoneMsg}</span>
                                              <div className="form-group">
                                                   <label>Email</label>
                                                   <input className="form-control" name="n_email" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                                              </div>
                     
                                              <div className="form-group">
                                                   <button type="submit" className="submit">Request Cab</button>
                                              </div>

                                         </form>
                                    </div>
                          </section>
                     
                     </div>
                     <div className="col-sm-3"></div>
               </div>
        
      </>);
}