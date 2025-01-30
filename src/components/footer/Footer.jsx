import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
              <h1 className="footer__title">Ebrium Coders</h1>
              <ul className="footer__list">
                  <li className="footer__item">
                      <a href="#about" className="footer__link">About</a>
                  </li>
                  <li className="footer__item">
                      <a href="#portfolio" className="footer__link">Projects</a>
                  </li>
                  <li className="footer__item">
                      <a href="#testimonials" className="footer__link">Testimonials</a>
                  </li>
                  
              </ul>

              <div className="footer__social">
                <a href="https://instagram.com/ebrium.coders" className="home__social-icon" target="_blank">
                    <i className='uil uil-instagram'></i>
                </a>
                <a href="https://github.com/c1ph3rrs" className="home__social-icon" target="_blank">
                    <i className='uil uil-github-alt'></i>
                </a>
                <a href="https://x.com/ebriumcoders" className="home__social-icon" target="_blank">
                    <i className='uil uil-twitter'></i>
                </a>  
              </div>

              <span className="footer__copy">&#169; 2025 Ebrium Coders. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;