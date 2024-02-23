import { useState } from "react";
import axios from "axios";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
{/*Component*/}
export default function CabBooking(){
         const [reqDate]=useState(date);
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
     return(<>
             <form method="post" onSubmit={submitCabForm}>
                         <div className="form-group">
                                 <input type="hidden" className="form-control" name="n_reqDate" value={reqDate}/>
                         </div>
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
                                 <input className="form-control" type="date" name="n_pickupDate" value={pickupDate} readOnly={readOnlyPickupDate} onChange={(e)=>{setPickupDate(e.target.value);}}/>
                         </div>
                         <span className="small text-danger">{pickupDateMsg}</span>
                         
                         <div className="form-group">
                                 <label>Drop Date&#42;</label>                                 
                                 <input className="form-control" type="date" name="n_dropDate" value={dropDate} readOnly={readOnlyDropDate} onChange={(e)=>{setDropDate(e.target.value);}}/>
                         </div>
                         <span className="small text-danger">{dropDateMsg}</span>                         
                         <div className="form-group">  
                                 <label>Pickup Time</label>                               
                                 <input className="form-control" type="text" name="n_pickupTime" value={pickupTime} placeholder="For Example:7.30 AM....." onChange={(e)=>{setPickupTime(e.target.value);}}/>
                         </div>
                         
                         <div className="form-group">
                                 <label>Pickup Address&#42;</label>                                 
                                 <textarea className="form-control" name="n_pickupAddress" value={pickupAddress} onChange={(e)=>{setPickupAddress(e.target.value);}} />
                         </div>
                         <span className="small text-danger">{pickupAddressMsg}</span>                         
                         <div className="form-group">
                                 <label>Drop Address&#42;</label>                                 
                                 <textarea  className="form-control" name="n_dropAddress" value={dropAddress} onChange={(e)=>{setDropAddress(e.target.value);}}/>
                         </div>
                         <span className="small text-danger">{dropAddressMsg}</span>                         
                         <div className="form-group">
                                 <label>Name&#42;</label>                                 
                                 <input className="form-control" type="text" name="n_name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                         </div>
                         <span className="small text-danger">{nameMsg}</span>                         
                         <div className="form-group">
                                 <label>Phone&#42;</label>                                 
                                 <input className="form-control" type="text" name="n_phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                         </div>
                         <span className="small text-danger">{phoneMsg}</span>                         
                         <div className="form-group">  
                                 <label>Email</label>                               
                                 <input className="form-control" name="n_email" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                         </div>
                         <br/>
                     
                         <div className="form-group">
                             <button type="submit" className="submit">Request Cab</button>
                         </div>

             </form>
     </>);
     {/*Functions*/}
     
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
                         "n_reqDate":reqDate,
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


                 
      
   

}
