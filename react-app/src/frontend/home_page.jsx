import Header from "./header";
import Footer from "./footer";
import CabBooking from "./cab_booking";
import {Helmet} from "react-helmet";
import Collapsible from 'react-collapsible';

export default function HomePage(){
     return(<>
           <TechnicalSEO/>
           <div className="container-fluid">                     
                     <Header/>
                     <Banner/>
                     <Body/>                     
                     <Footer/>
           </div>     
     </>);
}
{/*Technical SEO*/}
function TechnicalSEO(){
     return(<>
             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>Taxi Services| Experience Reliability, Timeliness, Fair Fare</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Experience excellent taxi services with reasonable fares, high safety, timeliness, and customer-centricity. Our focus on the customer serves you excellence."/>
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </Helmet>
     
     </>);
}
{/*Banner*/}
function Banner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <section className="w-100">
                          <img src="./MainImages/Hptaxi.PNG" alt="AeietyTrips" className="img-fluid w-100"/>
                     </section>
                     
                </div>
           </div>
      </>);
}

{/*Body*/}
function Body(){
      return(<>
                <div className="row padding25 background-aliceblue">
                          <div className="col-sm-4">
                                    <section className="background-powderblue shadow rounded">
                                         <section className="font font18 fw-bold padding10 text-center">&#128587;&nbsp;BOOK A CAB</section>
                                         <CabBooking/>
                                    </section>                                    
                          </div>
                          <div className="col-sm-8">
                               <h1>Why Choose Our Taxi Services </h1>
                               <section className="font font22">
                                    <p>Choosing AeietyTrips could mean selecting a customer-centric taxi service provider. That way, you can ensure timely, safe and reasonably priced cab travel.</p>
                                    <p>We carefully plan our cab operations by keeping the customer at the centre of everything. </p>
                                    <p>Our priority is to ease customer's pain points and give them the best experience. As such, you can get the value of your money and time by choosing our excellent cab services. </p>
                                    <p>AeietyTrips is especially the ideal choice for foreign tourists because of our comprehensive knowledge of the places worthy of visiting. In addition, our in-depth knowledge of hotels makes us the most preferred cab service provider for them.</p>
                                     
                               </section>
                               <section>
                                    <p className="font font22 fw-bold">OUR EXCELLENCE</p>
                               <div className="card-group font font18">
                                              <div className="card bg-transparent border-info">
                                                        <div className="card-header bg-transparent border-info text-center">&#8377;&nbsp;<br/>REASONABLE FARES</div>
                                                        <div className="card-body">                                                                  
                                                                  ➔Trip Cost Stays Within Budget<br/>
                                                                  ➔No Excessive Payment
                                                        </div>
                                              </div>
                                              <div className="card bg-transparent border-info">
                                                        <div className="card-header bg-transparent border-info text-center">&#8986;&nbsp;<br/>TIMELY PICKUP</div>
                                                        <div className="card-body">                                                                  
                                                                  ➔Reach Destination on Time<br/>
                                                                  ➔No Hassles in Waiting for Cab   
                                                        </div>
                                              </div>
                                              <div className="card bg-transparent border-info">
                                                        <div className="card-header bg-transparent border-info text-center">&#128663;&nbsp;<br/>SERVICED CARS</div>
                                                        <div className="card-body">                                                                  
                                                                  ➔Pleasant Ride With Clean Interior<br/>
                                                                  ➔No Car Breakdown on the Way
                                                        </div>
                                              </div>
                                              <div className="card bg-transparent border-info">
                                                        <div className="card-header bg-transparent border-info text-center">&#128587;&nbsp;<br/>EXPERIENCED DRIVERS</div>
                                                        <div className="card-body"> 
                                                                  ➔Travel Through Best Routes<br/>
                                                                  ➔No Worries of Accidents 
                                                        </div>
                                              </div>
                                              
                                    </div>


                               </section>                                
                               
                               
                                        
                          </div>
                </div>
                <div className="row background-azure padding25">
                     <div className="col-sm-12">
                         <span className="font font22 fw-bold">SERVICES FOR YOU</span>                         
                     </div>                     
                </div>
                <div className="row background-azure padding25">
                          <div className="col-sm-3">
                                    <section className="font font20">
                                              <p><b>&#128507; Local Taxi</b></p>
                                              <p>Cabs for intra-city travel, such as hospitals, markets, offices or institutions.</p>
                                    </section>                     
                          </div>
                          <div className="col-sm-3">
                                    <section className="font font20">
                                              <p><b>&#9967; Outstation Taxi</b></p>
                                              <p>Taxis for destinations outside the city for one-way and round-way travel.</p>
                                    </section>
                          </div>
                          <div className="col-sm-3">
                                    <section className="font font20">
                                              <p><b>&#9992; Airport Taxi</b></p>
                                              <p>Taxis for picking up from the airport and dropping at the airport.</p>
                                    </section>
                          </div>
                          <div className="col-sm-3">
                                    <section className="font font20">
                                              <p><b>&#127958; Sight Seeing Cab</b></p>
                                              <p>Cabs to pleasure trips and sightseeing tours within and outside the city.</p>
                                    </section>
                          </div>
                </div>
                <div className="row background-aliceblue padding25">
                          <div className="col-sm-6">
                                         <p className="font font22 fw-bold">FAQs</p>
                               <section className="padding10">
                                    
                                    <Collapsible className="font font22" trigger="How to Book Taxi With Aeiety Trips?&#5161;">
                                              <section className="font font22 bg-info rounded padding10">
                                              Booking a cab with AeietyTrips is a simple affair. All you need to do is fill out the cab request form on the website, call us, email us,  message us from the website's Contact Us page, or WhatsApp us. Upon receiving your request, we will do the rest.
                                              </section>                                               
                                    </Collapsible>
                                    <Collapsible className="font font22" trigger="How to Reschedule My Taxi Trip?&#5161;">
                                              <section className="font font22 bg-info rounded padding10">
                                              You can reschedule your cab trip by informing us three hours before the departure. There will be no charges. However, charges will be applicable if you let us know of your rescheduling three hours before the pickup time.  
                                              </section>                                               
                                    </Collapsible>
                                    <Collapsible className="font font22" trigger="How to Cancel My Scheduled Cab Trip?&#5161;">
                                              <section className="font font22 bg-info rounded padding10">
                                              You can cancel your scheduled cab trip without incurring cancellation charges by informing us anytime up to the day before the departure day. You should pay 50% of the trip fare if you cancel on the pickup day for the apparent reason.    
                                              </section>                                               
                                    </Collapsible>
                                    <Collapsible className="font font22" trigger="Can I Get Help to Find Accommodation?&#5161;">
                                              <section className="font font22 bg-info rounded padding10">
                                              Yes, we can find or recommend a good hotel for your stay after your cab trip to outstation destinations. Our comprehensive knowledge of accommodation facilities could be helpful to you.      
                                              </section>                                               
                                    </Collapsible>
                               </section>
                                   
                          </div>
                          <div className="col-sm-6">
                               <p className="font font22 fw-bold">NEED HELP?</p>
                               <section className="font font20 bg-info shadow rounded padding25">

                               We are ready to help you at every step during your taxi booking journey.
                               <br/>
                               &#128129;&nbsp;Call or WhatsApp us at 
                               </section>
                          </div>

                </div>

      </>);
}