import Header from "./header";
import Footer from "./footer";
import CabBooking from "./cab_booking";
import {Helmet} from "react-helmet";

export default function HomePage(){
     return(<>
         <div className="container-fluid">
                     <TechnicalSEO/>
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
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     
     </>);
}
{/*Banner*/}
function Banner(){
      return(<>
           <div className="row">
                <div className="col-sm-12">
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
                <div className="row padding25 background-mintcream">
                          <div className="col-sm-4">
                                    <section className="background-powderblue shadow rounded">
                                         <CabBooking/>
                                    </section>                                    
                          </div>
                          <div className="col-sm-8">
                                        
                          </div>
                </div>      
      </>);
}