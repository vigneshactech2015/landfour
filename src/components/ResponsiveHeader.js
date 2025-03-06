import logo from '../assets/images/logo.jpeg';
import '../styles/responsiveHeader.css';
import { languages } from '../languages/languages';

const ResponsiveHeader = ({language,setLanguage}) => {


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
        <h3 className='landfour-title' onClick={()=>onNavigate("/")}>{languages[language].Title}</h3>
        <nav>
            <ul className="navlinks">
                <li className="items" onClick={()=>onNavigate("about")}><a >{languages[language].About}</a></li>
                <li className="items" onClick={()=>onNavigate("groups")}><a >{languages[language].Groups}</a></li>
                <li className="items" onClick={()=>onNavigate("contact")}><a >{languages[language].Contact}</a></li>
                <li><button onClick={()=>setLanguage(language === "English" ? "Arabic" : "English")}>{language === "English" ? "عربي" : "English" }</button></li>
                <li onClick={showSidebar}><a href="#"><ion-icon name="menu-outline"></ion-icon></a></li>
            </ul>
            <ul className="sidebar">
                <li onClick={closeSidebar}><a className='sidebar-items' href="#"><ion-icon name="close-outline"></ion-icon></a></li>
                <li><a className='sidebar-items' onClick={()=>{onNavigate("about")
                closeSidebar()
                }
                }>{languages[language].About}</a></li>
                <li><a className='sidebar-items' onClick={()=>{
                    onNavigate("groups")
                    closeSidebar()
                    }}>{languages[language].Groups}</a></li>
                <img src={logo} alt="" />
            </ul>
        </nav>
    </header>
    )
}

export default ResponsiveHeader;  
