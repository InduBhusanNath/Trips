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
                <title>Cab and Tour Operator: Top Class Service at Affordable Costs</title>                
                <meta name="description" content="Are you searching for one of the trusted cab or tour operators? Choose us for cab booking and trip planning. We ensure the best experience at affordable prices."/>
                <meta property="og:title" content="Experience Best Cab Services and Trips" />
                <meta property="og:image" content={process.env.PUBLIC_URL + 'MainImages/logo.png'}/>
                <meta property="og:description" content="We are a trusted provider of excellent cab services and tours." />
                <meta property="og:url" content="https://aeiety.com" />
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
            </Helmet>
     
     </>);
}
{/*Banner*/}
function Banner(){
      return(<> 
                <div className="row">
                     <div className="col-sm-12 p-0 m-0">
                           <img src={process.env.PUBLIC_URL + 'MainImages/aboutus.png'} alt="Aeiety Trips" className="img-fluid w-100 m-0 p-0"/>
                     </div>
                </div>
                
      </>);
}

{/*Breadcrumb*/}
function BreadCrumb(){
      return(<>
                <div className="row">
                     <div className="col-sm-12">
                          <section className="p-1 font font18">
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
                          <h1 className="text-center">About Us: Discover Why We are an Excellent Cab and Tour Operator</h1>
                     </div>
                     <div className="col-sm-2"></div>
                </div>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                    
                     <div className="col-sm-10"><p>&nbsp;</p>
                          <section className="font font22">
                               <p>Aeiety Trips is a trusted cab service provider. It is also among the excellent tour operators. With customer-centric policies, we ensure our customers of the best quality cabs, reasonable fares, nil hidden costs, timeliness, and high safety. Likewise, we provide curated tour packages at affordable prices to give customers the best experiences. In addition, we promote adventure, eco and historical tourisms.  </p>                               
                          </section>
                     </div>
                     <div className="col-sm-1"></div>
                </div>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-10">
                          <section className="font font22">
                               <h2>Cabs of Different Types</h2>
                               <p>Customers have the flexibility to choose cabs according to their needs. We provide small, medium, and luxury cabs at different fares, allowing customers to select the ones they need. </p>
                               <h2>Local and Outstation Cabs</h2>
                               <p>At AeietyTrips, we provide cabs for local and outstation destinations. Therefore, customers can use our dedicated taxi service to travel to intra-city places and outside the city. Besides, they can use our cab service for sightseeing tours. </p>
                               <h2>Tourism </h2>
                               <p>We plan and implement adventure, eco, and historical tourism. Customers can choose from various curated tourism packages. Also, they can ask us to plan such tourism for them.</p>
                               <h2>Packages</h2>
                               <p>At Aeiety Trips, we provide excellent tour packages at various price points. Customers can find international package tours and domestic packages. </p>
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
                                    <li>To remove pain points and fine-tune taxi travel</li>
                                    <li>To provide unique, educative, and exciting trip experiences</li>                                   
                              </ul>

                         </section>
                     </div>
                     <div className="col-sm-5">
                          <section className="font font22">
                              <p><b>Vision</b></p>
                              <ul>
                                    <li>To become one of the topmost cab service providers</li>
                                    <li>To be one of the most preferred tour operators</li>                                   
                              </ul>
                         </section>

                     </div>
                     <div className="col-sm-1"></div>
                </div>

      
      </>);      
}
