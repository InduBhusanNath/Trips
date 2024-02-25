import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";

export default function GuwahatiTaxi(){
     return(<>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <Body1/>
                     <Body2/>
                     <Footer/>
                </div>
     </>);
}
{/*Technical SEO*/}
function TechnicalSEO(){
     return(<>
             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>Cab Service in Guwahati| Cabs for Local and Outstation Tours</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" href="./favicon.ico" type="image/gif" sizes="16x16"></link>
                <meta name="description" content="Avail of efficient cab service in Guwahati for local and outstation taxi tours. Reasonable fares, timely pickup, and customer-centricity distinguish our cabs."/>
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </Helmet>
     
     </>);
}
{/*Body1*/}
function Body1(){
      return(<>
           <div className="row background-lemonchiffon">
                <div className="col-sm-4 p-0 m-0">
                     <section className="p-3">                          
                               <img src="./GeneralImages/Guwahati.PNG" alt="AeietyTrips" className="img-fluid w-100 m-0 p-0"/>
                     </section>
                </div>
                <div className="col-sm-7 p-4 m-1">
                     <h1>Excellent Cab Service in Guwahati: Timely, Reasonable Fare, Friendly</h1>
                     <p className="font font22">
                           At AeietyTrips, we provide efficient cab service in Guwahati. That is why you can get the best taxi-ride experience when you choose our dedicated taxi service.  
                     </p>
                     <button type="button" class="btn btn-warning"><a href="/" className="action">Book Taxi&nbsp;&#129146;</a></button>



                </div>
                <div className="col-sm-1"></div>
          </div>
      </>);
}
{/*Body2*/}
function Body2(){
      return(<>
                <div className="row background-lemonchiffon">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-10 p-3">
                          <h2>How We Provide Efficient Cab Service in Guwahati</h2>
                          <section className="font font22">
                               <p>We are aware of the fact that running a cab service in Guwahati is challenging. </p>
                               <p>People from all over India and foreign countries come to the vibrant city. Many of them hire cabs for going from place to place in and outside the city. Providing them with personalized cab services needs careful planning and a will to give them the best cab experience. Therefore, we have carefully planned our taxi service in Guwahati, looking at every possible scenario.  </p>
                          </section>
                          <h2>The Excellence in Our Cab Service in Guwahati </h2>
                          <section className="font font22">
                               <p>We have dedicated time and effort to serve our customers in the best possible way. And that resulted in the excellence of our cab service in Guwahati.</p>
                               <p>Safety is our focus to ensure customers have no unwanted situations during their ride. For this, we provide well-maintained cabs and ensure experienced drivers. We believe this is the most essential criterion to run the best taxi service in Guwahati. </p>
                               <p>With properly serviced cars and experienced and well-trained drivers, the probability of accidents is the minimum. So, we are among those taxi operators in Guwahati that have made timely servicing of cars and expert drivers mandatory for our operations.</p>
                               <p>Timely pickup is the assurance of our Guwahati taxi service. For this reason, you can board the taxi on time. So you can reach your destination as per your schedule.</p>
                               <p>Asking for reasonable fares is our principle. So, we refrain from asking for excessive fares. And that makes us the most reasonably-priced Guwahati cab service provider. In addition, we do not incorporate any hidden costs in our pricing structure. </p>
                               <p>Notably, we are one of the taxi operators in Guwahati, offering high-quality Guwahati taxi service.</p>
                               <p>In addition to providing the best local taxi service in Guwahati, we run an excellent taxi service in Guwahati for outstation. If you are a foreigner and looking for a reliable outstation taxi service in Guwahati, you can use our taxis in Guwahati. We provide cabs in Guwahati to any destination in Assam and northeastern states.</p>
                               <p>We maintain good relationships with our customers. We believe good relationships matter a lot in providing customer-centric Guwahati cab services.</p>
                               <p>You can easily book a taxi in Guwahati from us. There are no hassles in booking a cab in Guwahati from AeietyTrips. You can submit the request form on our website or call or email us directly. Alternatively, you can WhatsApp us.</p>
                          </section>

                     </div>
                     <div className="col-sm-1"></div>

                </div>
      
      </>);
}