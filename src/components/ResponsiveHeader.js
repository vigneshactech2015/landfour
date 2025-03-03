import { useNavigate } from 'react-router';
import logo from '../assets/images/logo.jpeg';
import '../styles/responsiveHeader.css';
import { languages } from '../languages/languages';

const ResponsiveHeader = () => {

    const navigate = useNavigate()

    function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = 'flex';
        setTimeout(() => {
            sidebar.style.transform = 'translateX(0)'; 
        }, 10);
    }
    
    function closeSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.transform = 'translateX(100%)'; 
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300);
    }

    const onNavigate = (path) => {
        navigate(path)
    }

    return(
        <header>
        {/* <img src={logo} alt="landfour" className="logo"/> */}
        <h3 className='landfour-title' onClick={()=>onNavigate("/")}>{languages.English.Title}</h3>
        <nav>
            <ul className="navlinks">
                <li className="items" onClick={()=>onNavigate("/about")}><a >{languages.English.About}</a></li>
                <li className="items" onClick={()=>onNavigate("/groups")}><a >{languages.English.Groups}</a></li>
                <li className="items" onClick={()=>onNavigate("/menu")}><a >{languages.English.Menu}</a></li>
                <li className="items" onClick={()=>onNavigate("/partnership")}><a >{languages.English.Partnership}</a></li>
                <li><a ><button  onClick={()=>onNavigate("/contact")}>{languages.English.Contact}</button></a></li>
                <li onClick={showSidebar}><a href="#"><ion-icon name="menu-outline"></ion-icon></a></li>
            </ul>
            <ul className="sidebar">
                <li onClick={closeSidebar}><a href="#"><ion-icon name="close-outline"></ion-icon></a></li>
                <li><a onClick={()=>onNavigate("/about")}>{languages.English.About}</a></li>
                <li><a onClick={()=>onNavigate("/groups")}>{languages.English.Groups}</a></li>
                <li><a onClick={()=>onNavigate("/menu")}>{languages.English.Menu}</a></li>
                <li><a onClick={()=>onNavigate("/partnership")}>{languages.English.Partnership}</a></li>
                <img src={logo} alt="" />
            </ul>
        </nav>
    </header>
    )
}

export default ResponsiveHeader;  
