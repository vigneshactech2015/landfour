import '../styles/about.css';
import logo from '../assets/images/logo.jpeg';
import chef from '../assets/images/chef.jpg';
import { languages } from '../languages/languages';

const About = () => {
    return(
        <div id="about" className="landfor-about-container">
            <br/><br/>
        <h3 className="story-title">{languages.English.About}</h3>

            <div className="landfor-about-subcontainer">
                <img src={logo} alt="logo" className="landfor-aboutus-logo"/>
                <div >
            <p className="about-description"> 
            {languages.English.About_Us_Motto}
            </p>
        </div>
            </div>
       
            <h3 className="story-title">{languages.English.OurStory}</h3>


            <div className="landfor-about-storycontainer">
                <div className="story-description-container">
            <p className='story-description'>{languages.English.StoryTwo}</p>
       <p className='story-description'>{languages.English.StoryThree}</p>
       </div>
        <div>
        <img src={chef} alt="logo" className="landfor-chef-logo"/>
        </div>
            </div>
        </div>
    )
}

export default About