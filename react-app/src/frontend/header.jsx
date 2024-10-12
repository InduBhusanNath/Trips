import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header(){
     return(<>   
           <PreHeaderBar/>      
           <HeaderBar/>       
     </>);
}
function PreHeaderBar(){
      return(<>
                <div className="row padding0 background-peachpuff text-center">
                     <div className="col-sm-4">
                          <HelpLine/>
                     </div>
                     <div className="col-sm-3">
                          <span className="font font18 text-center">&#x1F4E7;&nbsp;&nbsp;aeiety.trips@gmail.com</span>
                     </div>
                     <div className="col-sm-5 text-center">
                          <nav className="font font18 text-center d-none d-sm-none d-md-none d-lg-block">
                               <ul>
                                    <li><Link to="/" className="text-decoration-none text-dark">&#x1F3E0;HOME</Link></li>
                                    <li><Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link></li>
                                    <li><Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link></li>
                                    <li><Link to="/blog-page" className="text-decoration-none text-dark">Blogs</Link></li>
                                    <li><Link to="/blog-page" className="text-decoration-none text-dark">Places to Visit</Link></li>
                               </ul>
                          </nav>
                     </div> 

                </div>
          </>);
      
}
function HeaderBar(){ 
     return(<>
           <div className="row padding10 bg-info d-sm-block d-md-none d-lg-none"><MobileMenu/></div>
           <div className="row padding10 background-blanchedalmond">                 
                 <div className="col-sm-2"><Logo/></div>  
                 <div className="col-sm-7"><Nav/></div>
                 <div className="col-sm-2"><RequestAQuote/></div>
                 <div className="col-sm-1"><Whatsapp/></div>
          </div>
     </>);
         
}
function Logo(){
     return(<>
           <section className="text-center padding10">
                <Link to="/" className="text-decoration-none"><img src={process.env.PUBLIC_URL + 'MainImages/logo.png'} className="img-fluid w-75" alt="AeietyTrips"/></Link>
                
          </section>
     </>);
}
function Nav(){
     return(<>
          <nav className="font font20 text-center d-none d-sm-none d-md-none d-lg-block">
              <ul>
                  <li><Link to="/" className="text-decoration-none text-dark">&#x1F3E0;HOME</Link></li>
                  <li>&#128661;&nbsp;Taxi&#9662;
                         <ul>
                             <li><Link to="/delhi-taxi" className="text-decoration-none text-dark">Delhi</Link></li>
                             <li><Link to="/guwahati-taxi" className="text-decoration-none text-dark">Guwahati</Link></li>

                         </ul>
                  </li>
                  <li>&#9978;&nbsp;Tourism&#9662;
                         <ul>
                               
                               <li><Link to="/adventure-tourism" className="text-decoration-none text-dark">Adventure</Link></li>
                               <li><Link to="/eco-tourism" className="text-decoration-none text-dark">Eco</Link></li>
                               <li><Link to="/relic-tourism" className="text-decoration-none text-dark">Historical</Link></li>
                         </ul>
                  </li>
                  <li><Link to="/#" className="text-decoration-none text-dark">&#128506;&nbsp;Tour Packages</Link></li>
                  <li><Link to="/#" className="text-decoration-none text-dark">&#128674;&nbsp;Cruises</Link></li>
                  
              </ul>
          </nav>
     </>);
}

function HelpLine(){
    return(<>
         <section className="text-center font font18">            
             Customer Care&nbsp;&nbsp;
             &#128222;&nbsp;(+91)8638576314
             <br/>             
         </section>
         
             
         
    
    </>);
}

function RequestAQuote(){
      return(<>
           <section className="bg-warning rounded-pill font font20 text-center padding10 shadow">            
           <Link to="/contactus" className="text-decoration-none text-dark">Request a Quote</Link>
           </section>
      </>);
}
function Whatsapp(){
           return(<>
               <section className="text-center">
                     <a aria-label="Message AeietyTrips" href="https://wa.me/9184368576314?text=I'Please%20get20back%20to%20me%20for%20cab%20booking" className="whatsapp"> <img alt="AeietyTrips" src={process.env.PUBLIC_URL + 'MainImages/whatsapp.png'}/></a>
               </section>           
           </>);  
}
function MobileMenu(){
      const [mobMenu,setMobMenu]=useState('hidden');
      function showMobMenu(){
           setMobMenu('shown');
      }
      function hideMobMenu(){
           setMobMenu('hidden');      
      }
     return(<>
           
                <div className="col-sm-12">
                      <button className="show_btn" onClick={showMobMenu}>&equiv;</button>
                      <section className={mobMenu}>
                               <button className="hide_btn" onClick={hideMobMenu}>&#10060;</button>
                               <section className="container font font20">
                                    <section className="row">
                                         <section className="col-sm">
                                              <Link to="/" className="text-decoration-none text-dark">HOME</Link>
                                              <br/>
                                              <Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>
                                              <br/>
                                              <Link to="/blog-page" className="text-decoration-none text-dark">Blogs</Link>
                                              <br/>
                                              <Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link>                                            
                                         </section>
                                         <section className="col-sm">
                                              <span className="fw-bold">Cab Services</span>
                                              <br/>
                                              <Link to="/delhi-taxi" className="text-decoration-none text-dark">Delhi</Link>
                                              <br/>
                                              <Link to="/guwahati-taxi" className="text-decoration-none text-dark">Guwahati</Link>
                                         </section>
                                    </section>
                               </section>
                     </section>
                </div>           
    </>);
}