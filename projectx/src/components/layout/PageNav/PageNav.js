import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
    <nav>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Game</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/gameoptions`} activeClassName='active'>Options</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/stockmarket`} activeClassName='active'>Market</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/stores`} activeClassName='active'>Stores</NavLink>
    </nav>
);

export default PageNav;