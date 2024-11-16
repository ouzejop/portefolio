import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Importation du fichier CSS

const Header = () => {
  const location = useLocation(); // Récupération de l'URL actuelle

  return (
    <header className="header">
      <div>Ouzdev.</div>
      <nav>
        <ul>
          <li>
            <Link 
              to="/" 
              className={`lien ${location.pathname === '/' ? 'active' : ''}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`lien ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`lien ${location.pathname === '/about' ? 'active' : ''}`}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
