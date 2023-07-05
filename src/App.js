import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Images from "./components/CatImages/images";
import Upload from "./pages/upload";
import './App.css';
import Vote from "./pages/vote";
import Favorites from "./pages/favorites";
import Breeds from "./pages/breeds";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
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