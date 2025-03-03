import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/about.css';

const About = ({showHeader=false}) => {
    return(
        <div id="about" className="landfour-about-container">
        {showHeader && <ResponsiveHeader/>}
        <div className="landfour-about-content">
            <h3>We are Land four</h3>
            <p>Authentic Saudi folk products with international quality under the supervision of Chef Youssef Al-Farhan</p>
            {/* <img src={} />  */}
        </div>
        </div>
    )
}

export default About