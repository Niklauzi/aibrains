import React from 'react';
import Tilt from 'react-tilt';
import brain from './brains-100.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 120, width: 130 }} >
          <div className="Tilt-inner pa3"> 
          <img alt="logo" src={brain}/> 
          </div>
         </Tilt>

        </div>
    )
}


export default Logo;