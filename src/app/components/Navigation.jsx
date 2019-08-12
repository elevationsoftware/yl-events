import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav list-inline w-100">
                    <li className="nav-item list-inline-item">
                        <NavLink activeClassName='active' className="nav-link pl-0" to="/"><i className="fas fa-home"></i> Home</NavLink>
                    </li>
                    <li className="nav-item list-inline-item ml-auto">
                        <a className="nav-link pr-0" href="#">Sign In <i className="fas fa-sign-in-alt"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export const ConnectedNavigation = connect(state=>state)(Navigation);