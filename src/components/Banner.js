import '../styles/menu.css';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Haneeni from '../assets/images/Haneeni.jpg';
import Marasi from '../assets/images/marasi.jpg';
import DateCake from '../assets/images/datecake.jpg';
import Areekah from '../assets/images/Areekah.jpg';

const Banner = ({language}) => {
    return (
        <div id="menu" className='banner'>
          <Carousel 
        className="carousel"
        autoPlay ={true}
        showArrows={false} 
        showThumbs={false} 
        transitionTime={3}
        infiniteLoop={true}
        stopOnHover={false}
        showStatus={false}
        >
            {[
                {title:language === "English" ? "Haneeni" :"حنيني",component:Haneeni},
                {title:  language === "English" ? "Marasi" : "مراسي",component:Marasi},
                {title: language === "English" ? "Date Cake" : "كعكة التمر",component:DateCake},
                {title: language === "English" ? "Areekah" : "عريكة",component:Areekah}
                ].map((item,index)=>{
                return (<Link
              style={{ textDecoration: "none", color: "white" }}
            >
              <div key={index}>
                <img
                  src={item.component}
                  alt="areekah"
                />
              </div>

              <div className="poster-overlay">
                <div className="poster-title">
                  {item.title}
                </div>
                
              
              </div>
            </Link>)
        })}
            </Carousel>
        </div>
        
    )
}

export default Banner