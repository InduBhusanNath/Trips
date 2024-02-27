import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

export default function DelhiTaxi(){
     return(<>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
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
                <title>Cab Service in Delhi| Taxi for Outstation and Local Trips</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" href="./favicon.ico" type="image/gif" sizes="16x16"></link>
                <meta name="description" content="Experience smooth and pleasant taxi rides with our excellent cab service in Delhi. Book taxis for local and outstation tours, including airport pickup and drop."/>
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </Helmet>
     
     </>);
}
{/*Breadcrumb*/}
function BreadCrumb(){
     return(<>
               <div className="row bg-transparent">
                    <div className="col-sm-12">
                         <section className="padding25 font font18">
                                   <Link to="/" className="text-decoration-none text-dark">HOME</Link>&gt;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>&gt;Delhi Taxi Service
                         </section>
                    </div>
              </div>
     </>);
}
{/*Body*/}
function Body(){
      return(<>
            <div className="row">
                <div className="col-sm-12">
                    <h1>PAGE UNDER CONSTRUCTION.....</h1>
                </div>
            </div>
      
      </>);
}