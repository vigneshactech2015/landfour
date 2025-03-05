import '../styles/contact.css';
import { languages } from "../languages/languages";

const Contacts = () => {
    return(
        <>
        <div className="landfor-contact-maincontainer" id="contact">
            <div className="landfor-socialMediaContainer">
                <h4>{languages.English.Social_Media}</h4>
                <div className="landfor-socialMediaLogosContainer">
                <ion-icon className="landfor-socialMedia-logo-item" name="logo-instagram" size="large" style={{color:"#DD2A7B"}}/>
                <ion-icon className="landfor-socialMedia-logo-item" name="mail-open-outline" size="large" style={{color:"#ffffff"}}/>
                <ion-icon className="landfor-socialMedia-logo-item" name="globe-outline" size="large" style={{color:"#515BD4"}} />
                </div>
            </div>

            <div className="landfor-importantlinks-container">
            <h4>{languages.English.Important_links}</h4>
            <h5>{languages.English.Privacy_Policy}</h5>
            <h5>{languages.English.Terms_Conditions}</h5>
            </div>

            <div className="landfor-whoarewe-container">
               <h4>{languages.English.WhoWeAre}</h4>
               <p className="landfor-whoarewe-description">{languages.English.WhoWeAre_Description}</p>
            </div>
        </div>
        <div>
        </div>
        </>
    )
}

export default Contacts