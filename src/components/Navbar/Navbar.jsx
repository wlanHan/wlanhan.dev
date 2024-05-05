import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

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
              <a className='menu-item'>AnaSayfa</a>
            </li>
            <li>
              <a className='menu-item'>Yetenekler</a>
            </li>
            <li>
              <a className='menu-item'>İş Tecrübesi</a>
            </li>
            <li>
              <a className='menu-item'>İletişime Geçin</a>
            </li>

            <butto className="contact-btn " onClick={() => { }}> Benimle Çalışın </butto>

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
