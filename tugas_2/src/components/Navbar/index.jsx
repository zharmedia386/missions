import React from 'react'
import './navbar.css'
import navbarImg from './../../utils/images/image-11.svg'

function App() {
  return (
    <header>
      <nav className='navbar'>
        <img src={navbarImg} alt="Simply Easy Learning" width="200" height="80" />
        <ul className='navlink'>
          <li><a href="#">Lessons</a></li>
          <li><a href="#">Toolkit</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}
  
export default App;