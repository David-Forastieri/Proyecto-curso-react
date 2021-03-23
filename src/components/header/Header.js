import React from 'react'
import { GiSoccerBall } from "react-icons/gi";
import './header.css'

const Header = () => {
  return (
    <div className='header container-fluid'>
      <div className='row justify-content-center'>
        <p>La Pelota No Se Mancha</p>
        <div className='align-self-center icon'>
          <GiSoccerBall />
        </div>
      </div>
    </div>
  )
}

export default Header
