import React from "react";
import './navbar.styles.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingBag,faBolt,faSignInAlt } from '@fortawesome/free-solid-svg-icons'


export const Navbar = ()=>(
    <div className="navbar">
        <Link className="buttons" to="/">
            <FontAwesomeIcon className="apper" icon={faBolt} />
            <p>VANDER</p>
        </Link>
        <div className="inputs">
            <input className="input" type="text" placeholder="Buscar"/>
            <FontAwesomeIcon className="search" icon={faSearch} />
            <FontAwesomeIcon className="shopping" icon={faShoppingBag} />
            <Link className="login" to="/login">
                <FontAwesomeIcon className="apper" icon={faSignInAlt} />
                <p>login</p>
            </Link>
        </div>
    </div>
)