
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';
import './style.css';


const NavBar = () => {

  const { cart } = useContext(CartContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'}><h2 className="logo">La Pelota No Se Mancha</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {cart.length !== 0 ? <CartWidget /> : null}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <NavLink to={`/categorias/${'fem'}`} activeClassName='seleccionado'> Femenino </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">Calzado</li>
                  <li className="dropdown-item">Camisetas</li>
                  <li className="dropdown-item">Pantalones</li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink to={`/categorias/${'masc'}`} activeClassName='seleccionado'> Masculino </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">Calzado</li>
                  <li className="dropdown-item">Camisetas</li>
                  <li className="dropdown-item">Pantalones</li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to={`/categorias/${'accesorios'}`} activeClassName='seleccionado'> Accesorios </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default NavBar;
