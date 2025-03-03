import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/group.css';
import qeshd from '../assets/images/qeshd.jpg';
import { Link, redirect } from "react-router-dom";
import logo from '../assets/images/logo.jpeg';
import { languages } from "../languages/languages";

const Group = ({showHeader=false}) => {

    const onRedirect = (path) => {
      window.open(path,"_blank")
    }

    return(
        <>
        {showHeader && <ResponsiveHeader/>}
        <Carousel 
        className="carousel"
        autoPlay ={true}
        showArrows={false} 
        showThumbs={false} 
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
            <Link
              style={{ textDecoration: "none", color: "white" }}
            //   to={`https://google.com`}
            >
              <div className="poster">
                <img
                  src={qeshd}
                  alt="loading"
                />
              </div>

              <div className="poster-overlay">
                <div className="poster-description">
                  {"Qashd Store specializes in providing popular foods from different regions of the Kingdom, with new dishes to distinguish us and satisfy the taste of our customers."}
                </div>
                <div className="poster">
                  
                </div>
                <div className="poster-description">
                  <span className="poster-rating" onClick={()=>onRedirect('https://qeshd.com/')}>
                    { "View All"}
                  </span>
                </div>
              </div>
            </Link>
            </Carousel>
        </>
    )
}

export default Group