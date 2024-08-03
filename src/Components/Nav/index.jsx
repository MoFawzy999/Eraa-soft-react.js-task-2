import { Link } from 'react-router-dom';
import './Nav.css' ;


export default function Nav() {
  return (
    <nav className='container-fluid '>
      <div className='container d-flex flex-wrap justify-content-between align-items-center p-4'>
       <img src={"https://assets.nicepagecdn.com/d2cc3eaa/460597/images/default-logo.png"} />
       <ul className='d-flex gap-5 fw-normal menu'>
        <li><Link to="/" className='txt-menu-style'>Home</Link></li>
        <li><Link to="/about" className='txt-menu-style'>About</Link></li>
        <li><Link to="/contact-us" className='txt-menu-style'>Contact Us</Link></li>
      </ul>
      <i className='fa-solid fa-bars menu-icon'></i>
      </div>
    </nav>
  )
}
