/* eslint-disable no-unused-vars */
import React from 'react';
import './headerTop.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faMapMarker } from '@fortawesome/free-solid-svg-icons';

const HeaderTop = (props) => (
    <div className="container p-0">
        <div className="row p-0">
            <div className="col-md-12 col-lg-12 col-sm-12 p-0">
                <ul className="nav justify-content-between">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <img src='/kfc_logo.png' width="85px" height="85px" alt="KFC" />
                        </Link>
                    </li>
                    <div style={{display: 'flex'}}>
                        <li className="nav-item last-item">
                            <Link className="nav-link" to="/page/location">
                                <FontAwesomeIcon icon={faMapMarker} /> STORE LOCATOR
                            </Link>
                        </li>
                        <li class="nav-item last-item">
                            <Link className="nav-link" to="/page/login">
                                <FontAwesomeIcon icon={faUser} /> SIGN IN / REGISTER
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
);

export default HeaderTop;