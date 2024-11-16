import React from 'react';
import './Project.css'
import ecoshop from '../Assets/ecoshop.png'

const Projects = () => {
  const projects = [
    {
      title: 'EcoShop',
      description: `
        <h3>Description détaillée du projet EcoShop</h3>
        <p><strong>EcoShop</strong> est un projet de plateforme e-commerce innovante, axée sur la vente de produits écologiques. Développé sur une période d’un mois, ce projet combine un design moderne, une architecture modulaire, et des fonctionnalités interactives pour offrir une expérience utilisateur fluide. <strong>EcoShop</strong> est conçu pour répondre aux besoins des utilisateurs tout en sensibilisant à l’importance de consommer de manière responsable.</p>
        
        <h4>Objectifs du projet</h4>
        <ul>
          <li><strong>Promouvoir des produits écologiques :</strong> Offrir une plateforme mettant en avant des articles respectueux de l’environnement.</li>
          <li><strong>Créer une expérience utilisateur moderne :</strong> Utilisation d’une interface intuitive, responsive, et adaptée aux mobiles.</li>
          <li><strong>Développer un projet complet :</strong> Inclure toutes les fonctionnalités clés d’un site e-commerce (navigation, produits, panier, gestion de compte).</li>
          <li><strong>Sensibilisation à la technologie :</strong> Exploiter des outils modernes comme React, styled-components, React Router, et des API tierces.</li>
        </ul>

        <h4>Fonctionnalités principales</h4>
        <ul>
          <li><strong>Page d'accueil :</strong> Carrousel interactif, grille de produits dynamique, mode jour/nuit.</li>
          <li><strong>Cartes produits :</strong> Affichage détaillé des produits avec option "Ajouter au panier".</li>
          <li><strong>Panier :</strong> Gestion des articles ajoutés, prix total et suppression.</li>
          <li><strong>Connexion :</strong> Formulaire pour s'inscrire ou se connecter.</li>
        </ul>

        <h4>Technologies utilisées</h4>
        <ul>
          <li><strong>React :</strong> Structure du projet basée sur des composants modulaires.</li>
          <li><strong>React Router :</strong> Gestion de la navigation entre les pages (accueil, détail produit, panier, connexion).</li>
          <li><strong>styled-components :</strong> Gestion des styles pour chaque composant avec adaptation au thème.</li>
          <li><strong>Context API :</strong> Basculer entre les modes jour/nuit et gérer globalement le panier.</li>
          <li><strong>FakeStore API :</strong> Chargement dynamique des produits pour simuler une boutique en ligne réelle.</li>
          <li><strong>Test automatisé :</strong> Utilisation de Jest et React Testing Library pour valider les fonctionnalités critiques.</li>
        </ul>

        <h4>Défis et solutions rencontrés</h4>
        <ul>
          <li><strong>Problème d’intégration du panier :</strong>
            <ul>
              <li><em>Défi :</em> Les informations des produits ajoutés depuis la page d’accueil et la page produit n’étaient pas uniformes.</li>
              <li><em>Solution :</em> Centralisation des données via le CartContext et unification de la logique d’ajout.</li>
            </ul>
          </li>
          <li><strong>Gestion du thème jour/nuit :</strong>
            <ul>
              <li><em>Défi :</em> Adapter tous les composants, y compris ceux dynamiques comme le panier ou les formulaires.</li>
              <li><em>Solution :</em> Utilisation de Context API pour appliquer des styles cohérents.</li>
            </ul>
          </li>
          <li><strong>Responsive Design :</strong>
            <ul>
              <li><em>Défi :</em> Adapter la navigation et la grille des produits sur des écrans variés.</li>
              <li><em>Solution :</em> Utilisation de media queries et styled-components.</li>
            </ul>
          </li>
        </ul>

        <h4>Lien vers le projet déployé</h4>
        <p><a href="https://ecoshopuvs.netlify.app/" target="_blank" rel="noopener noreferrer">👉 EcoShop - Déployé sur Netlify</a></p>
      `,
      imageUrl:ecoshop , 
    }
  ];

  return (
    <div className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {project.imageUrl && <img src={project.imageUrl} alt={`Capture de ${project.title}`} />}
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
