import '../styles/contact.css';
import { languages } from "../languages/languages";

const Contacts = () => {
    return(
        <>
        <div className="landfour-contact-maincontainer" id="contact">
            <div className="landfour-socialMediaContainer">
                <h4>{languages.English.Social_Media}</h4>
                <div className="landfour-socialMediaLogosContainer">
                <ion-icon className="landfour-socialMedia-logo-item" name="logo-instagram" size="large" style={{color:"#DD2A7B"}}/>
                <ion-icon className="landfour-socialMedia-logo-item" name="mail-open-outline" size="large" style={{color:"#ffffff"}}/>
                <ion-icon className="landfour-socialMedia-logo-item" name="globe-outline" size="large" style={{color:"#515BD4"}} />
                </div>
            </div>

            <div className="landfour-importantlinks-container">
            <h4>{languages.English.Important_links}</h4>
            <h5>{languages.English.Privacy_Policy}</h5>
            <h5>{languages.English.Terms_Conditions}</h5>
            </div>

            <div className="landfour-whoarewe-container">
               <h4>{languages.English.WhoWeAre}</h4>
               <p className="landfour-whoarewe-description">{languages.English.WhoWeAre_Description}</p>
            </div>
        </div>
        <div>
        </div>
        </>
    )
}

export default Contacts