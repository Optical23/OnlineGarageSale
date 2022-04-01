import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../utils/auth';
function Navbar() {
    return ( 
    <div className="m-4 sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">Online Garage Sale</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                {Auth.loggedIn() ? (
                <>
                  <a href="/profile" className="nav-item nav-link active">Profile/Store</a>
                  <a href="/search" className="nav-item nav-link active">Search</a>
                  <a href="/" className="nav-item nav-link" onClick={Auth.logout}>Logout</a>
                </>
              ) : (
                <>
                    <a href="/login" className="nav-item nav-link">Login</a>
                    <a href="/signup" className="nav-item nav-link">Signup</a>
                    <a href="/search" className="nav-item nav-link active">Search</a>
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