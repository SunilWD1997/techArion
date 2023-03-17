
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="left">
        <NavLink to='/'>LOG IN</NavLink>
        <NavLink to='/'>REPRESENTATION</NavLink>
        <NavLink to='/'>PRIVATE PARTIES</NavLink>
      </div>
      <img src="/images/logo.jpg" alt="" />
      <div className="right">
        <NavLink to='/'>EVENTS</NavLink>
        <NavLink to='/'>CONTACT US</NavLink>
        <NavLink to='/'>ABOUT US</NavLink>
      </div>

    </div>
   
    
  )
}

export default Navbar