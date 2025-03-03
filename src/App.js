import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Group from './components/Group';
import Home from './components/Home';
import { Routes, Route } from "react-router";
import Menu from './components/Menu';
import Partnership from './components/Partnership';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route exact path="/about" element={< About showHeader={true}/>} />
        <Route exact path="/contact" element={< Contacts showHeader={true}/>} />
        <Route exact path="/groups" element={< Group showHeader={true}/>} />
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/partnership" element={<Partnership/>}/> 
       

      </Routes>
    </div>
  );
}

export default App;
