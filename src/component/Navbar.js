import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  const [hamburgermenu, sethamburgerMenu] = useState(true);
  const [hemicon, setHemicon] = useState(true);

  const handlehamburger = () =>{
    sethamburgerMenu(!hamburgermenu)
    setHemicon(!hemicon)
  }

  return (
    <nav className={`Navbar ${props.toggleMode} ${props.mode}`} style={{backgroundColor: props.mode === 'lightmode'?'#7d91b3':'rgba(0,0,0,0.9)'}}>
        <div className="navmain">
          <Link className="ad" to='/Textman'><h1 className='logo'>{props.logo}</h1></Link>
          <div className="navsub">
            <Link className="Navlink ad" to='/Textman'>Home</Link>
            <Link className="Navlink ad" to='/About'>About Us</Link>
          </div>
        </div>
        <div className='container'>
          <input type='checkbox' id='check' onClick={props.toggleMode}/>
          <label htmlFor='check' className='button' />
        </div>
        <div className={`hamburger`} onClick={handlehamburger}>
          <i className={`fa-solid ${hemicon ? "fa-bars" : "fa-xmark"}`} />
        </div>
        <div className={`${!hamburgermenu ? "hmenu" : 'dnone'}`}>
          <Link className="Navlink ad" to='/Textman'>Home</Link>
          <Link className="Navlink ad" to='/About'>About Us</Link>
        </div>
    </nav>
  );
}

Navbar.propTypes = {logo : PropTypes.string
}