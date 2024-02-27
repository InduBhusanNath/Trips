import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BlogPage(){
     return(<>
             <TechnicalSEO/>
             <div className="container-fluid bg-body">
                     <div className="col-sm-12">
                             <Header/>
                             <BreadCrumb/>
                             <Footer/>
                     </div>
             </div>
             
    
     </>);
}
{/*Technical SEO*/}
function TechnicalSEO(){
    return(<>
            
            <Helmet>
               <meta charSet="utf-8"/>
               <title>Cabs for Outstation| Pleasant, Timely, Safe Rides for You</title>
               <link rel="canonical" href="http://mysite.com/example" />
               <link rel="icon" href="./favicon.ico" type="image/gif" sizes="16x16"></link>
               <meta name="description" content="Book cabs for outstation destinations with us. That can ensure timely, pleasant, safe and fair-priced taxi rides for various outstation places of your choice."/>
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
                                  <Link to="/" className="text-decoration-none text-dark">HOME</Link>&gt;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>&gt;Blogs
                        </section>
                   </div>
             </div>
    </>);
}