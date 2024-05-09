import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import Skills from '../Skills/Skills';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className="nav-content">
          <h2>wlanHan.</h2>

          <ul>
            <li>
              <a href='#' className='menu-item'>AnaSayfa</a>
            </li>
            <li>
              <a href='#skills' className='menu-item'>Yetenekler</a>
            </li>
            <li>
              <a href='#work-experience' className='menu-item'>İş Tecrübesi</a>
            </li>
            <li>
              <a href='#contact-me' className='menu-item'>İletişime Geçin</a>
            </li>

            <button href='#contact-me' className="contact-btn " onClick={() => { }}> Benimle Çalışın </button>

          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>

        </div>

      </nav>

    </>
  )
}

export default Navbar
