import logo from '../assets/images/logo.jpeg';
import '../styles/responsiveHeader.css';
import { languages } from '../languages/languages';

const ResponsiveHeader = () => {


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
        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <header>
        {/* <img src={logo} alt="landfor" className="logo"/> */}
        <h3 className='landfor-title' onClick={()=>onNavigate("/")}>{languages.English.Title}</h3>
        <nav>
            <ul className="navlinks">
                <li className="items" onClick={()=>onNavigate("about")}><a >{languages.English.About}</a></li>
                <li className="items" onClick={()=>onNavigate("groups")}><a >{languages.English.Groups}</a></li>
                <li className="items" onClick={()=>onNavigate("menu")}><a >{languages.English.Menu}</a></li>
                {/* <li className="items" onClick={()=>onNavigate("partnership")}><a >{languages.English.Partnership}</a></li> */}
                <li className="items" onClick={()=>onNavigate("contact")}><a >{languages.English.Contact}</a></li>
                <li onClick={showSidebar}><a href="#"><ion-icon name="menu-outline"></ion-icon></a></li>
            </ul>
            <ul className="sidebar">
                <li onClick={closeSidebar}><a className='sidebar-items' href="#"><ion-icon name="close-outline"></ion-icon></a></li>
                <li><a className='sidebar-items' onClick={()=>onNavigate("about")}>{languages.English.About}</a></li>
                <li><a className='sidebar-items' onClick={()=>onNavigate("groups")}>{languages.English.Groups}</a></li>
                <li><a className='sidebar-items' onClick={()=>onNavigate("menu")}>{languages.English.Menu}</a></li>
                {/* <li><a className='sidebar-items' onClick={()=>onNavigate("partnership")}>{languages.English.Partnership}</a></li> */}
                <img src={logo} alt="" />
            </ul>
        </nav>
    </header>
    )
}

export default ResponsiveHeader;  
