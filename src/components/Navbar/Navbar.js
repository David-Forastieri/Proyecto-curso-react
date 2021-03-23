
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiSoccerBall } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';
import './style.css';


const NavBar = () => {

  const { cart } = useContext(CartContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'}><div className="logo-nav"><GiSoccerBall /></div></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {cart.length !== 0 ? <CartWidget /> : null}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item tecla">
                <NavLink to={`/categorias/${'fem'}`} activeClassName='seleccionado'> Femenino </NavLink>
              </li>
              <li className="nav-item tecla">
                <NavLink to={`/categorias/${'masc'}`} activeClassName='seleccionado'> Masculino </NavLink>
              </li>
              <li className="nav-item tecla">
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
