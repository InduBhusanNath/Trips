import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
export default function Footer(){
     return(<>
                 <Foot/>
                 <CopyRight/>
     </>);
}
function Foot(){
     return(<>
         <row className="row background-peachpuff padding25">
                 <div className="col-sm-3">
                         <section className="padding10 text-center">
                                 <Link to="/" className="text-decoration-none"><img src={process.env.PUBLIC_URL + 'MainImages/logo.png'} className="img-fluid w-50" alt="AeietyTrips"/></Link>
                                 
                         </section>
                         <section className="padding10 text-center">
                                 <a href="https://www.facebook.com/aeietytrips/" target="_blank" className="text-decoration-none"><FontAwesomeIcon icon={faFacebook}/></a>
                                 &nbsp;&nbsp;
                                 <FontAwesomeIcon icon={faTwitter} />
                                 &nbsp;&nbsp;
                                 <FontAwesomeIcon icon={faLinkedin} />
                                 &nbsp;&nbsp;
                                 <FontAwesomeIcon icon={faYoutube} />
                                 &nbsp;&nbsp;
                                 <FontAwesomeIcon icon={faInstagram} />

                         </section>
                         
                 </div>
                 <div className="col-sm-3">
                         <section>
                             <p className="font font24 fw-bold">Know Us</p>
                             <p className="font font20">
                             Aeiety Trips is a trusted cab service provider and excellent tour operator. Its principal aim is to provide the best experience to customers. <br/>Customer-centricity is the governing principle of everything we do. 

                             </p>

                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                             <p className="font font24 fw-bold">Useful Links</p>
                                                 &#10132;&nbsp;<Link to="/" className="text-decoration-none text-dark">HOME</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/blog-page" className="text-decoration-none text-dark">Blogs</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link>

                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">Quick Connect</p>
                                 
                                 <p>&#128241;&nbsp;
                                         (+91)8638576314
                                 </p>
                                 <p>&#128231;&nbsp;
                                         aeiety.trips@gmail.com
                                 </p>
                                 
                         </section>
                 </div>
         </row>
     </>);
}
{/*Copyright*/}
function CopyRight(){
         return(<>
                 <div className="row background-bisque">
                         <div className="col-sm-4"></div>
                         <div className="col-sm-4">
                                 <section className="font font12">
                                    &copy;AeietyTrips &#124;&nbsp; All Rights Reserved &#124;&nbsp;Terms of Use&#124;&nbsp;Privacy Policy
                                 </section>
                         </div>
                          <div className="col-sm-4"></div>                          
                 </div>
         </>);
}