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
      const [uid]=useState(pid);
      const [resMsg,setResMsg]=useState('');
      const [showEdit,setShowEdit]=useState('hidden');
      const [hideEdit,setHideEdit]=useState('shown');
      
      const [tripType,setTripType]=useState('');
      const [oneWayChecked,setOneWayChecked]=useState(false);
      const [roundWayChecked,setroundWayChecked]=useState(false);
      const [tripTypeMsg,setTripTypeMsg]=useState('');
      const [pickupDate,setPickupDate]=useState('');
      const [pickupDateMsg,setPickupDateMsg]=useState('');
      const [readOnlyPickupDate,setReadOnlyPickupDate]=useState(false);
      const [returnDate,setReturnDate]=useState('');
      const [returnDateMsg,setReturnDateMsg]=useState('');
      const [readOnlyReturnDate,setReadOnlyReturnDate]=useState(false);
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
                setReturnDate(response.data.tripReturnDate);
                setPickupTime(response.data.tripPickupTime);
                setPickupAddress(response.data.tripPickupAddress);
                setDropAddress(response.data.tripDropAddress);
                setName(response.data.tripName);
                setPhone(response.data.tripPhone);
                setEmail(response.data.tripEmail); 
           })
           .catch(error=>{               

           });
      },[]);
       
           
           

      {/* Post Edit Data*/}

         function submitCabForm(e){
          e.preventDefault();
          
          if(!pickupDate){
                  setPickupDateMsg('Select Pickup Date.....');
                  return;
          }
          if(tripType==='roundWay' && !returnDate){
                  setReturnDateMsg('Select Return Date.....');
                  return;
          } 
           if(returnDate==='00-00-0000' && tripType==='roundWay'){ 
               setReturnDateMsg('Select Return Date.....');
               return;                  
           }
          if(!pickupAddress){
                  setPickupAddressMsg('Type Pickup Address.....');
                  return;                 
          }
          if(!dropAddress){
                  setDropAddressMsg('Type Drop Address.....');
                  return;                        
          }
          if(!name){
                  setNameMsg('Type Customer Name.....');
                  return;                         
          }
          if(!phone){
                  setPhoneMsg('Type Customer Phone No.....');
                  return;
          }

          var post_data={
                  "n_uid":uid,
                  "n_tripType":tripType,
                  "n_pickupDate":pickupDate,
                  "n_pickupTime":pickupTime,
                  "n_returnDate":returnDate,
                  "n_pickupAddress":pickupAddress,
                  "n_dropAddress":dropAddress,
                  "n_name":name,
                  "n_phone":phone,
                  "n_email":email,
                  "n_processed":'No'
          }

          axios.post('/update-cab-booking/',post_data,{
                 headers:{'Content-Type':'application/JSON'}
          })
          .then(response=>{
                 setResMsg(response.data);                 
          })
          .catch(error=>{
                setResMsg(error);
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
                                         
                                         <span className={hideEdit} onClick={()=>{setShowEdit('hidden');}}><span className="hide_btn">&#10060;</span></span><br/>
                                         <span className="small text-danger">{resMsg}</span>
                                         <form method="post" onSubmit={submitCabForm}>
                                              <div className="form-group">
                                                        <input type="hidden" className="form-control" name="n_uid" value={uid}/>
                                              </div>
                               
                                              <label>Trip Type&#42;</label>
                                              <div className="form-check">
                                                        <select class="form-select" name="n_tripType" value={tripType} onChange={(e)=>{setTripType(e.target.value);}} >
                                                             <option value="oneWay">One Way</option>
                                                             <option value="roundWay">Round Way</option>
                                                        </select>
                                              </div>
                                              <span className="small text-danger">{tripTypeMsg}</span>
                                              <div className="form-group">
                                                   <label>Pickup Date&#42;</label>
                                                   <input className="form-group" type="date" name="n_pickupDate" value={pickupDate} readOnly={readOnlyPickupDate} onChange={(e)=>{setPickupDate(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{pickupDateMsg}</span>
                                              <div className="form-group">
                                                   <label>Return Date&#42;</label>
                                                   <input className="form-group" type="date" name="n_returnDate" value={returnDate} readOnly={readOnlyReturnDate} onChange={(e)=>{setReturnDate(e.target.value);}}/>
                                              </div>
                                              <span className="small text-danger">{returnDateMsg}</span>
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