import { languages } from "../languages/languages";
import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/home.css';
import logo from '../assets/images/logo.jpeg';
import Group from "./Group";
import About from "./About";
import Contacts from "./Contacts";

const Home = () => {
    return(<div id="home">
        <ResponsiveHeader/>
        <About/>
        <Group showHeader={false}/>
        <Contacts/>
    </div>)
}

export default Home