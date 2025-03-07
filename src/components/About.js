import '../styles/about.css';
import logo from '../assets/images/logo.jpeg';
import chef from '../assets/images/chef.jpg';
import { languages } from '../languages/languages';
import TrackVisibility from 'react-on-screen';
import {useState,useEffect} from 'react';

const About = ({language}) => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = language === "English" ? ["Reviving Saudi Heritage", "Quality and Authentic Taste","Promoting Saudi Culinary Culture","Offering Traditional Saudi Desserts"] : ["إحياء التراث السعودي","الجودة والطعم الأصيل","تعزيز ثقافة الطهي السعودي","تقديم الحلويات السعودية التقليدية"];
    const period = 1000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(100);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return(
        <div id="about" className="landfour-about-container">
            <br/><br/>
        <h3 style={{textDecoration:"underline"}} className="story-title">{languages[language].About}</h3>

            <div className="landfour-about-subcontainer">
                <img src={logo} alt="logo" loading="lazy" className="landfour-aboutus-logo"/>
                <div>
           <br/>
            <div>
                <TrackVisibility>
              {({ isVisible }) =>
              <div>
               <h3 style={{textAlign:"center",color:"#350214"}} className="txt-rotate" dataPeriod="1000" data-rotate= {language === "English" ? '[ "Reviving Saudi Heritage", "Quality and Authentic Taste","Promoting Saudi Culinary Culture","Offering Traditional Saudi Desserts"]' : '["إحياء التراث السعودي","الجودة والطعم الأصيل","تعزيز ثقافة الطهي السعودي","تقديم الحلويات السعودية التقليدية"]'}>
                <span className="wrap">{text}</span>
                </h3>
              </div>}
            </TrackVisibility>
            </div>

            <p className="about-description"> 
            {languages[language].About_Us_Motto}
            </p>

        </div>
            </div>
       
            <h3 style={{textDecoration:"underline"}} className="story-title">{languages[language].OurStory}</h3>


            <div className="landfour-about-storycontainer">
                <div className="story-description-container">
            <p className='story-description'>{languages[language].StoryTwo}</p>
       <p className='story-description'>{languages[language].StoryThree}</p>
       </div>
        <div>
        <img src={chef} alt="logo" loading="lazy" className="landfour-chef-logo"/>
        </div>
            </div>
        </div>
    )
}

export default About