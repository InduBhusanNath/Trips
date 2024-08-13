import Header from "./header";
import Footer from "./footer";
import { Outlet,Link } from "react-router-dom";
export default function UniqueAttractions(){
         return(<>
                 <div className="container-fluid">
                         <Header/>
                         <Body1/>
                         <Footer/>
                 </div>
                         
         </>);
         function Body1(){
                 return(<>
                         <div className="row bg-light">
                                 <div className="col-sm-3">
                                         <Link to="/unique-attractions/unique-attractions-assam">Assam</Link>
                                 </div>
                                 <div className="col-sm-9">
                                         <Outlet/>
                                 </div>
                         </div>
                 </>);
         }
}