export default function Footer(){
     return(<>
             <Foot/>
     </>);
}
function Foot(){
     return(<>
         <row className="row background-bisque padding25">
                 <div className="col-sm-4">
                         <section className="padding25">
                            <img src="./MainImages/logo.png" className="img-fluid" alt="AeietyTrips"/>
                         </section>
                 </div>
                 <div className="col-sm-4">
                         <section>
                             <span className="font font24 fw-bold">Know AeietyTrips</span>
                             <span className="font font20">

                             </span>

                         </section>
                 </div>
                 <div className="col-sm-4">
                         <section>
                             <span className="font font24 fw-bold">Connect With Us</span>

                         </section>
                 </div>
         </row>
     </>);
}