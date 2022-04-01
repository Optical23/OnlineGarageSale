import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Auth from '../utils/auth';
function Navbar() {
    return ( 
    <div className="m-4 sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Online Garage Sale</Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                {Auth.loggedIn() ? (
                <>
                  <Link to="/profile" className="nav-item nav-link active">Profile/Store</Link>
                  <Link to="/search" className="nav-item nav-link active">Search</Link>
                  <Link to="/" className="nav-item nav-link" onClick={Auth.logout}>Logout</Link>
                </>
              ) : (
                <>
                    <Link to="/login" className="nav-item nav-link">Login</Link>
                    <Link to="/signup" className="nav-item nav-link">Signup</Link>
                    <Link to="/search" className="nav-item nav-link active">Search</Link>
                </>
              )}
                    
                    
                </div>
            </div>
        </div>
        </nav>
    </div>
    );
}

export default Navbar;