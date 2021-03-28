import React from 'react';
import '../assets/styles/components/Footer.scss';
import logoLinkedIn from '../assets/static/linkedin.png';
import logoGitHub from '../assets/static/github.png';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__links'>
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaracion de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </div>
    <div className='footer__social'>
      <a href='https://linkedin.com/in/abotlucas' rel='noreferrer' target='_blank'><img src={logoLinkedIn} alt='linkedin' className='footer__social--logo' /></a>
      <a href='https://github.com/AbotLucas' rel='noreferrer' target='_blank'><img src={logoGitHub} alt='github' className='footer__social--logo' /></a>
    </div>
  </footer>
);

export default Footer;
