import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className={`App ${menuOpen ? 'menu-open' : ''}`}>
        <nav>
          <Link to="/" className="title">
            CHINESE LITERATURE
          </Link>
          <ul className={menuOpen ? 'open' : ''}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/page2" onClick={toggleMenu}>Quote</Link></li>
            <li><Link to="/page3" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/page4" onClick={toggleMenu}>Contact</Link></li>
            <li><FontAwesomeIcon icon={faXmark} onClick={toggleMenu} className="close-icon" /></li>
          </ul>
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="open-icon" />
          <footer>
            <p>© 2024 All Rights Reserved.</p>
          </footer>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
