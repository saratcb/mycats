import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import Images from "./components/images";
import Upload from "./components/upload";
import './App.css';
import Vote from "./components/vote";
import Favorites from "./components/favorites";
import Breeds from "./components/breeds";

function App() {
  return (
    <Router>
    <div>
      <header>
        <ul>
          <li><Link className={'active'} to="/vote">Vote</Link></li>
          <li><Link to="/breeds">Breeds</Link></li>
          <li><Link to="/images">Images</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
      </header>
      <div className="components">
        <Routes>
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