import '../styles/contact.css';
import { languages } from "../languages/languages";

const Contacts = ({language}) => {

    const onNavigate = (path) => {
        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <>
        <div className="landfour-contact-maincontainer" id="contact">
            <div className="landfour-socialMediaContainer">
                <h4>{languages[language].Social_Media}</h4>
                <div className="landfour-socialMediaLogosContainer">
                <ion-icon className="landfour-socialMedia-logo-item" name="logo-instagram" size="large" style={{color:"#DD2A7B"}}/>
                <ion-icon className="landfour-socialMedia-logo-item" name="mail-open-outline" size="large" style={{color:"#ffffff"}}/>
                <ion-icon className="landfour-socialMedia-logo-item" name="globe-outline" size="large" style={{color:"#515BD4"}} />
                </div>
            </div>

            <div className="landfour-importantlinks-container">
            <h4>{languages[language].Important_links}</h4>
            <h6 style={{cursor:"pointer"}} onClick={()=>onNavigate("groups")}>{languages[language].Groups}</h6>
            <h6 style={{cursor:"pointer"}} onClick={()=>onNavigate("about")}>{languages[language].About}</h6>
            </div>

            <div className="landfour-whoarewe-container">
               <h4 className="landfour-whoarewe-title">{languages[language].WhoWeAre}</h4>
               <h6 className="landfour-whoarewe-description">{languages[language].WhoWeAre_Description}</h6>
            </div>
        </div>
        <div>
        </div>
        </>
    )
}

export default Contacts