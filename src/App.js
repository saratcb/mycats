import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Images from "./pages/Images";
import Upload from "./pages/Upload";
import './App.css';
import Vote from "./pages/Vote";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";

const App = ()=> {
  return (
    <Router>
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="components">
        <Routes>
          <Route path="" element = {<Home/>}/>
          <Route path="/vote" element = {<Vote/>}/>
          <Route path="/breeds" element = {<Breeds/>}/>
          <Route path="/images" element = {<Images/>}/>
          <Route path="/favorites" element = {<Favorites/>}/>
          <Route path="/upload" element = {<Upload/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

/*<li><Link className={location.pathname === '/vote' ? 'active' : ''} to="/vote">Vote</Link></li>
          <li><Link className={location.pathname === '/breeds' ? 'active' : ''}to="/breeds">Breeds</Link></li>
          <li><Link className={location.pathname === '/images' ? 'active' : ''}to="/images">Images</Link></li>
          <li><Link className={location.pathname === '/favorites' ? 'active' : ''}to="/favorites">Favorites</Link></li>
          <li><Link className={location.pathname === '/upload' ? 'active' : ''}to="/upload">Upload</Link></li>*/