import React, { useState } from 'react';
import mainLogo from '../../assets/main_logo.jpeg';
import './header.css';

const Header = () => {

    window.addEventListener('scroll', function() {
        const headers = document.querySelector('.header');
        if(this.scrollY >= 80) headers.classList.add('scroll-header');
        else scrollUp.classList.remove('scroll-header');
    });

    const [Toggle, showMenu] = useState(false);

    const [ActiveLink, setActiveLink] = useState('#home');

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img src={mainLogo} alt="ebrium Coders" className="nav__logo-img" />
            </a>

              <div className={ Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                          <a href="#home" onClick={ () => setActiveLink('#home') } className={ ActiveLink === '#home' ? 'nav__link active-link' : 'nav__link' }>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={ () => setActiveLink('#about') } className={ ActiveLink === '#about' ? 'nav__link active-link' : 'nav__link' } >
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills"  onClick={ () => setActiveLink('#skills') } className={ ActiveLink === '#skills' ? 'nav__link active-link' : 'nav__link' } >
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={ () => setActiveLink('#services') } className={ ActiveLink === '#services' ? 'nav__link active-link' : 'nav__link' }>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={ () => setActiveLink('#portfolio') } className={ ActiveLink === '#portfolio' ? 'nav__link active-link' : 'nav__link' }>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contactme" onClick={ () => setActiveLink('#contact') } className={ ActiveLink === '#contact' ? 'nav__link active-link' : 'nav__link' }>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                  <i className="uil uil-times nav__close" onClick={ () => showMenu(!Toggle)}></i>
            </div>

              <div className="nav__toggle" onClick={ () => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
