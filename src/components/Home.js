import ResponsiveHeader from "./ResponsiveHeader";
import '../styles/home.css';
import Group from "./Group";
import About from "./About";
import Contacts from "./Contacts";
import Menu from "./Menu";

const Home = () => {
    return(<div id="home">
        <ResponsiveHeader/>
        <Menu/>
        <About/>
        <Group/>
        <Contacts/>
    </div>)
}

export default Home