import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/contact.css';
import { languages } from "../languages/languages";

const Contacts = ({showHeader=false}) => {
    return(
        <>
        {showHeader && <ResponsiveHeader/>}
        <div className="landfour-contact-maincontainer">
            <div className="landfour-socialMediaContainer">
                <h4>Social Media</h4>
                <div className="landfour-socialMediaLogosContainer">
                <ion-icon name="logo-instagram" size="large" style={{color:"#C13584"}}/>
                <ion-icon name="mail-open-outline" size="large" style={{color:"blue"}}/>
                <ion-icon name="globe-outline" size="large" />
                </div>
            </div>

            <div className="landfour-importantlinks-container">
            <h4>Important links</h4>
            <h5>Privacy policy</h5>
            <h5>Terms and Conditions</h5>
            </div>

            <div className="landfour-whoarewe-container">
               <h4> Who we are</h4>
               <p className="landfour-whoarewe-description">Authentic Saudi folk products with international quality under the supervision of Chef Youssef Al-Farhan</p>
            </div>
            {/* <div className="landfour-contact-subcontainer">
            
            <div className="landfour-socialMedia-container">
            <h3>{languages.English.Contact}</h3>
           
            
            </div>
            
            <h5 className="landfour-address"> <ion-icon name="home-outline" size="large" /> &nbsp;&nbsp;&nbsp;{languages.English.Address_Detail}</h5>
            </div> */}

        </div>
        </>
    )
}

export default Contacts