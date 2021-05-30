import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

  const { user: { name }, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');
    
    dispatch({ type: types.logout })
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Asociaciones</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="active" 
                to="/marvel" 
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact 
                className="nav-link" 
                activeClassName="active"
                to="/dc"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact 
                className="nav-link" 
                activeClassName="active"
                to="/search"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item ms-md-auto d-flex">
              
              <span className="nav-link text-info">
                { name }
              </span>

              <button
                className="nav-link btn"
                onClick={ handleLogout }
              >
                Logout
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}