import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import './style.css';
import { Link } from 'react-router-dom';

export default function Header({
  color,
  colorBackground,
  onClick,
  lightIcon }) {
  const [dropdown, setDropdown] = useState('invisible');

  function handleVisible() {
    if (dropdown === 'invisible') {
      setDropdown('dropdown')
    } else {
      setDropdown('invisible')
    }
  }

  function handleLightMode() {
    onClick();
  }

  return (
    <>
      <header style={{ backgroundColor: colorBackground, color: color }}>
        <nav className='nav-bar'>
          <button className='button' onClick={handleVisible}>
            {dropdown === 'invisible' ? <RxHamburgerMenu color={color} size={30} /> : <IoClose color='#f00' size={30} />}
          </button>
          <h3>Portifólio</h3>
          <button className='button' onClick={handleLightMode}>
            {lightIcon ? <MdDarkMode title='Mude para modo escuro' color='#333' size={30} /> : <FaLightbulb title='Mude para modo claro' color='#FFFF00' size={30} />}
          </button>
        </nav>
      </header>
      <div className={dropdown}>
        <ul className='container-link'
          style={{ backgroundColor: colorBackground }}>
          <li><Link style={{ color: color }}
            className='links' to="/about">Sobre</Link></li>
          <li><Link style={{ color: color }}
            className='links' to="/hability">Habilidades</Link></li>
          <li><Link style={{ color: color }}
            className='links' to="/project">Projetos</Link></li>
          <li><Link style={{ color: color }}
            className='links' to="/contact">Contatos</Link></li>
        </ul>
      </div>
    </>
  )
}

Header.propTypes = {
  onClick: PropTypes.func,
  colorBackground: PropTypes.string,
  color: PropTypes.string,
  lightIcon: PropTypes.bool
}
