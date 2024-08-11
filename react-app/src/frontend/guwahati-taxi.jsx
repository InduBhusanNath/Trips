import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

export default function GuwahatiTaxi(){
     return(<>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BreadCrumb/>
                     <Body1/>
                     <Body2/>
                     <Body3/>                 
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
{/*Breadcrumb*/}
function BreadCrumb(){
     return(<>
               <div className="row bg-transparent">
                    <div className="col-sm-12">
                         <section className="padding25 font font18">
                                   <Link to="/" className="text-decoration-none text-dark">HOME</Link>&gt;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>&gt;Guwahati Taxi Service
                         </section>
                    </div>
              </div>
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
//Body3
function Body3(){
      return(<>
                <div className="row background-lemonchiffon">
                          <div className="col-sm-1"></div>
                          <div className="col-sm-10 p-3">
                                    <h2>Excellent Cab Service in Guwahati for Local Trips</h2>
                                    <section className="font font22">
                                         <p>
                                            We provide cabs to any place to visit in Guwahati. With many tourist places in Guwahati, foreigners and visitors from different places in India can get many options. They can undergo the best sightseeing experience by hiring our dedicated cab service in Guwahati. With our comprehensive knowledge of the available Guwahati tour places, we can ensure customers a rich Guwahati tourism experience.
                                         </p>
                                         <p>
                                            Ancient temples, stunning river beaches, parks, waterfalls, a planetarium, a science museum, and an art museum are the attractive Guwahati tourist places.
                                         </p>
                                    </section>
                                    <section className="font font22">
                                         <h3>Umananda-the Smallest Island in the World</h3>                                     
                                         <p>
                                            The Umananda island is one of the best places to visit in Guwahati. Notably, it is the smallest river island in the world. Umananda is also a key component of Guwahati tourism.
                                         </p>
                                         <p>
                                            The island stands on the river Brahmaputra, flowing across the city. Being the smallest island does not mean it is devoid of human activities. Instead, Umananda attracts foreign tourists and other people. As such, it receives significant footfalls regularly.
                                         </p>
                                         <p>
                                            There is an ancient Shiva temple on the island. Numerous devotees come to the temple to offer their prayers regularly.
                                         </p>
                                         <p>
                                           In addition, the surroundings all around Umananda are majestic. The beautiful view of the Brahmaputra river, with both banks and the city as the background, provides a mesmerizing sight that can remain in memory forever. Also, the peaceful atmosphere could bring calmness to the mind.
                                         </p>
                                         <p>
                                           Reaching Umananda can be quick and convenient by hiring a Guwahati taxi service. After deboarding from the taxi, visitors should board a ferry at the river bank to reach the island shortly.
                                         </p>
                                         <p>
                                           Ferries run at frequent intervals, providing seamless connectivity between the island and the river bank. Interestingly, the ferry travel can be another exciting experience. With the island in sight, the flowing river, and the natural beauty around, the experience can be unforgettable.
                                         </p>
                                         <h3>Nilachal Hill-- the Abode of the Kamakhya Temple</h3>
                                         <p>
                                            A fusion of natural beauty and spirituality attracts people from various parts of the world to the Nilachal Hills. The hills stand on the south bank of the river Brahmaputra.
                                         </p>
                                         <p>
                                           The fame of Nilachal Hills in Guwahati has spread globally due to the abode of the famous Kamakhya temple being on the hills.
                                         </p>
                                         <p>
                                           People from different parts of India and overseas countries regularly visit the temple. The presence of people from various places also creates vibrancy around.
                                         </p>
                                         <p>
                                           The best option to reach the temple is to rent a Guwahati taxi. The ride from the foothill to the temple can be an exciting experience. The natural beauty and serenity of the entire Nilachal hills make it an attractive place to visit in Guwahati.
                                         </p>
                                         <h3>Srimanta Sankardev Kalakshetra—the Cultural Hub</h3>
                                         <p>
                                            Visiting the Srimanta Sankardev Kalakshetra in Guwahati can be educative and exciting. It is a cultural institution that gives insights into the cultural heritage of Assam. In addition, other educative aspects of the institution make it an exciting place to visit in Guwahati.
                                         </p>
                                         <p>
                                            Srimanta Sankardev Kalakshetra consists of a cultural museum, a park, a library, restaurants, and a theatre.
                                         </p>
                                         <p>
                                            Due to the widespread popularity of the cultural institution, it has become one of the most visited Guwahati tourist places.
                                         </p>
                                         <p>
                                            Visitors can avail of a Guwahati cab service to reach the cultural institution.
                                         </p>
                                         <h2>North Bank of River Brahmaputra—the Land of Ancient Temples</h2>
                                         <p>
                                           The city’s part on the north bank of the river Brahmaputra is popularly known as North Guwahati. It is different from the rest of Guwahati due to the calm atmosphere.
                                         </p>
                                         <p>
                                           In North Guwahati, there can be many things to do. The options include sightseeing, engaging in spirituality, and picnicking. Due to the broad range of activity options, North Guwahati is one of the best places to visit in Guwahati.
                                         </p>
                                         <p>
                                            Centuries-old temples can give a glimpse of the richness of construction technology during the ancient days.
                                         </p>
                                         <p>
                                           Temples in North Guwahati were built by kings who ruled during the 17th and 18th centuries. That means the temples are more than three hundred years old.
                                         </p>
                                         <p>
                                           Interestingly, the temples appear in good condition despite being that old. And that speaks of the advanced construction technology in the past centuries.
                                         </p>
                                         <p>
                                           A visit to the temples can arouse spirituality apart from getting insights into the rich construction methodologies of the past. Also, visitors can spend time in a peaceful atmosphere to diminish stress.
                                         </p>
                                         <p>
                                           An eye-catching waterfall in North Guwahati can arouse excitement. That can also prompt visitors to sit and relax while immersing themselves in the vibrancy of nature.
                                         </p>
                                         <p>
                                           There are green areas and beautiful river banks to explore. These places are also popular picnic spots.
                                         </p>
                                         <p>
                                           Availing of a taxi service in Guwahati is a quick option to reach North Guwahati from the other bank. During the taxi travel, you will get the opportunity to cross the spectacular Brahmaputra river over the iconic Saraighat bridge. 
                                         </p>
                                         <p>
                                            In addition to taxis, there are other exciting options to reach North Guwahati. 
                                         </p>
                                         <p>
                                            Ferries run to and from North Guwahati at frequent intervals. That can be an exciting experience due to the sight of the banks and the river. 
                                         </p>
                                         <p>
                                            Besides, the ropeway can be another exciting option for commuting to and from North Guwahati. 
                                         </p>
                                    </section>

                          </div>
                          <div className="col-sm-1"></div>
                </div>          
      </>);
}