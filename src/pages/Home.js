import React from 'react';
import Contact from '../components/contact.js'
import logo from '../Assets/logo.jpeg'
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <div className='presentation'>
        <h2>Salut 👋, <span className='ouz'>Je suis Ousmane</span></h2>
        <p>developpeur <span className='ouz'>fullstack</span></p>
        <span className='description'>Je suis un developpeur senegalais,<br/>je suis actuellement etudiant en Master<br/>Informatique a l'universite Gaston Berger<br/>de Saint-Louis </span>
        <div className='contact'>
          <Contact />
        </div>
        
      </div>
      <div>
        <img src={logo} alt='logo' className='logo'/>
      </div>
      
    </div>
    
    
  );
};

export default Home;
