import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink exact to="/contacts" className="nav-item nav-link">Contacts</NavLink>
                <NavLink exact to="/todos" className="nav-item nav-link">ToDos</NavLink>
            </div>
        </nav>
    );
}

export { Nav };