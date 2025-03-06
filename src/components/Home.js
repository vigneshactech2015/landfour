import { lazy, Suspense,useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/home.css';
import Banner from "./Banner";
const Group = lazy(()=>import("./Group"));
const About = lazy(()=>import("./About"));
const Contacts = lazy(()=>import("./Contacts"));


const Home = () => {
    
    const [language,setLanguage] = useState("English")

    return(<div id="home">
        <ResponsiveHeader language={language} setLanguage={setLanguage}/>
        <Banner language={language}/>
        <Suspense fallback={<p>Loading...</p>}>
        <About language={language}/>
        <Group language={language}/>
        <Contacts language={language}/>
        </Suspense>
    </div>)
}

export default Home