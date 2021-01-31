
import React from 'react';
import CartWidget from './CartWidget';
import './style.css';


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h2 className="logo">La Pelota No Se Mancha</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <CartWidget />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Femenino</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Calzado</a></li>
                    <li><a className="dropdown-item" href="#">Camisetas</a></li>
                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                  </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Masculino</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Calzado</a></li>
                    <li><a className="dropdown-item" href="#">Camisetas</a></li>
                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                  </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
  )
}

export default NavBar;
