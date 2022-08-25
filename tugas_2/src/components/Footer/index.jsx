import React from 'react'
import './footer.css'
import footerImg from './../../utils/images/image-11.svg'

function Footer() {
  return (
    <header>
      <footer className='footer-content'>
        <p className="copyright">&copy; 2022</p>
        <ul className='footerlink'>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Curators</a></li>
          <li><a href="#">Legal</a></li>
        </ul>
      </footer>
    </header>
  );
}
  
export default Footer;