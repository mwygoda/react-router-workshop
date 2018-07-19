import React from 'react';
import {Link} from 'react-router-dom';
import {isUserLoggedIn} from '../Autorization';

const Navbar = () => {
    return(
        <div>
        {isUserLoggedIn() &&
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Other">Other</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
    </ul>
  </div>
</nav>
        }
        </div>
    )
}

export default Navbar;