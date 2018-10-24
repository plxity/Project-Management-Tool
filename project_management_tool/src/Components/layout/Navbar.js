import React from 'react';
import {Link} from 'react-router-dom';
import  Signedinlink from './SignedInlinks';
import Signedoutlink from './Signedoutlinks';
const Navbar =()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                <Signedinlink/>
                <Signedoutlink/>
            </div>
        </nav>
    )
}
export default Navbar;