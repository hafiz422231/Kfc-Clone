import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({ title, routeName }) => (
    <Link className="nav-item nav-link active" to={`/${routeName}`} title={title}>
        <b>{title}</b>
    </Link>
);

export default NavItem;