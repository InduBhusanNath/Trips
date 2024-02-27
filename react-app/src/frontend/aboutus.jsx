import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
export default function AboutUs(){
     return(<>  
                <TechnicalSEO/>
                <div className="container-fluid">                         
                     <Header/>
                     <Banner/>
                     <BreadCrumb/>
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
                <title>Cabs| Customer Satisfaction is Our Focus, Urge, Success</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" href="./favicon.ico" type="image/gif" sizes="16x16"></link>
                <meta name="description" content="Ride cabs that can give you satisfaction from every aspect—fair fares, timeliness, safety and customer-centricity. Your taxi satisfaction is our success."/>
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
                          <img src="./MainImages/aboutus.PNG" alt="AeietyTrips" className="img-fluid w-100 m-0 p-0"/>
                     </div>
                </div>
                
      </>);
}

{/*Breadcrumb*/}
function BreadCrumb(){
      return(<>
                <div className="row bg-transparent">
                     <div className="col-sm-12">
                          <section className="padding25 font font18">
                                    <Link to="/" className="text-decoration-none text-dark">HOME</Link>&gt;About Us
                          </section>
                     </div>
               </div>
      </>);
}
{/*Body*/}
function Body(){
      return(<>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-2"></div>
                     <div className="col-sm-8 padding25">
                          <h1>A Bit About Us and Our Service of Cabs</h1>
                     </div>
                     <div className="col-sm-2"></div>
                </div>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-5">
                          <section>
                                   <img src="./GeneralImages/USP.PNG" alt="AeietyTrips" className="img-fluid w-100 m-0 p-0"/>
                          </section>
                     </div>
                     <div className="col-sm-5"><p>&nbsp;</p><p>&nbsp;</p>
                          <section className="font font22">
                               <p>AeietyTrips is a trusted taxi service provider. We are on a dedicated mission to give customers the best experience in cab travels. With customer-centric policies, we ensure our customers of the best quality cabs, reasonable fares, nil hidden costs, timeliness, and high safety. </p>                               
                          </section>
                     </div>
                     <div className="col-sm-1"></div>
                </div>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-10">
                          <section className="font font22">
                               <h2>Cabs of Different Types</h2>
                               <p>Customers have the flexibility to choose cabs according to their needs. We provide small, medium and luxury cabs at different fares to allow customers to select the ones they need. </p>
                               <h2>Local and Outstation Cabs</h2>
                               <p>At AeietyTrips, we provide cabs for local and outstation destinations. Therefore, customers can avail our dedicated taxi service to travel to intra-city places and outside the city. Besides, they can use our cab service for sightseeing tours. </p>
                          </section>
                     </div>
                     <div className="col-sm-1"></div>
                </div>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-5">
                          <section className="font font22">
                              <p><b>Mission</b></p>
                              <ul>
                                   <li>To ease taxi travel by providing excellent cab services</li>
                                   
                                   
                              </ul>

                         </section>
                     </div>
                     <div className="col-sm-5">
                          <section className="font font22">
                              <p><b>Vision</b></p>
                              <ul>
                                    <li>To become one of the topmost cab service providers</li>
                                    <li>To increase service offerings to become a full-fledged tour operator</li>
                                   
                              </ul>

                         </section>

                     </div>
                     <div className="col-sm-1"></div>
                </div>

      
      </>);      
}
