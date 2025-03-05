import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/home.css';
import Group from "./Group";
import About from "./About";
import Contacts from "./Contacts";
import Banner from "./Banner";

const Home = () => {
    return(<div id="home">
        <ResponsiveHeader/>
        <Banner/>
        <About/>
        <Group/>
        <Contacts/>
    </div>)
}

export default Home