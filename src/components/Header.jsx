import React from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Netflix_logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo-platzi-video' className='header__img' />
      <div className='header__links'>
        <ul>
          <li><Link activeClass='active' to='Mi Lista' spy={true} smooth={true}>Mi Lista</Link></li>
          <li><Link activeClass='active' to='Originales de Netflix' spy={true} smooth={true} offset={-100}>Netflix Originals</Link></li>
          <li><Link activeClass='active' to='Tendencias' spy={true} smooth={true}>Populares</Link></li>
        </ul>
      </div>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href='/'>Account</a></li>
          <li><a href='/'>Sign Out</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
