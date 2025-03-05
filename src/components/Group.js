import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/group.css';
import qeshd from '../assets/images/qeshd.jpg';
import { Link, redirect } from "react-router-dom";
import { languages } from "../languages/languages";

const Group = () => {

    const onRedirect = (path) => {
      window.open(path,"_blank")
    }

    return(
        <div id="groups">
          <br/><br/>
          <h3 className="group-title">{languages.English.Our_Groups}</h3>

          <br/><br/>
          <div className="group-container">

          {[
            {title:"Qeshd",description:"Qashd Store specializes in providing popular foods from different regions of the Kingdom, with new dishes to distinguish us and satisfy the taste of our customers.",websitelink:"https://qeshd.com/"}
            ,{
              title:"Areekat Alshef",description:"Areekat Alshef is a traditional Saudi restaurant and a specialty store dedicated to reviving authentic Saudi heritage products."
            }].map((item,index)=>{
            return(
              <div key={index} className="group-subContainer">
                <h4 className="groupitem-title">{item.title}</h4>
                <p className="groupitem-description">{item.description}</p>
               { item.websitelink && <button className="groupitem-button" onClick={()=>window.open(item.websitelink,"_blank")}>{languages.English.VisitWebsite}</button> }
                </div>
            )
          })}

          </div>
        </div>
    )
}

export default Group