import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>

            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className='mobile-menu-container'>
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

                        <button className='contact-btn' onClick={() => {}}>
                            Benimle Çalışın
                        </button>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default MobileNav
