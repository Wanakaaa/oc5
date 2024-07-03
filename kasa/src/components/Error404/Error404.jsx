import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

function Erreur404() {
  return (
    <div className='container'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='goBackHomeLink'>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Erreur404