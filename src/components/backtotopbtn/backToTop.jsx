/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ScrollBtn from './scrollupbtn';

const BackToTopBtn = (props) => (
    
    <div className="container mt-3 mb-5" style={{ borderTop: '1px solid lightgray', paddingTop: '45px' }}>
        <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 text-right m-0">
                <ScrollBtn />
            </div>
            <div className="col-md-12 col-lg-12 col-sm-12 text-center m-0 p-0">
                <Link to="/">
                    <img src='/down_logo.png' width="240px" height="90" alt="BottomImageKFC"/>
                </Link>
            </div>
        </div>
    </div>

);

export default BackToTopBtn;