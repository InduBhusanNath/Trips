import Header from "./header";
import Footer from "./footer";

export default function UniqueAttractions(){
         return(<>
                 <div className="container-fluid">
                         <Header/>
                         <Body1/>
                         <Body2/>
                         <Footer/>
                 </div>
                         
         </>);
         function Body1(){
                 return(<>
                         <div className="row background-aliceblue">
                                 <div className="sm-col-1"></div>
                                 <div className="sm-col-10 padding25">
                                        <h1>Unique Attractions You Should Not Miss Out On</h1>
                                 </div>
                                 <div className="sm-col-1"></div>                                 
                         </div>
                 </>);
         }
         function Body2(){
                return(<>
                        <div className="row background-aliceblue">
                                <div className="sm-col-1"></div>
                                <div className="sm-col-10 padding25">
                                       <h2>Umananda-The Smallest River Island In The World</h2>
                                </div>
                                <div className="sm-col-1"></div>                                 
                        </div>
                </>);
        }
}