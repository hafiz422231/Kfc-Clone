/* eslint-disable no-unused-vars */
import React from 'react';
import './footerUpper.scss';
import {Link} from 'react-router-dom';

const FooterUpper = () => (
    <div className="container mt-3 mb-3">
        <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6">
                <h6>Information</h6>
                <Link to="/page/about-us" className="linkitem" title="About Us">About Us</Link><br />
                <Link to="/page/mitao-bhook" className="linkitem" title="Mitao Bhook">Mitao Bhook</Link><br />
                <Link to="/page/privacy-policy" className="linkitem" title="Privacy Policy">Privacy Policy</Link><br />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6">
                <h6>Food</h6>
                <Link to="/page/nutritional-information" className="linkitem" title="Our Secret Recipe">Our Secret Recipe</Link><br />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6">
                <h6>Locations</h6>
                <Link to="/page/location" className="linkitem" title="Find a Store">Find a Store</Link><br />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6">
                <h6>Get in Touch</h6>
                <Link to="/page/contact" className="linkitem" title="Contact">Contact</Link><br />
                <Link to="/page/join-us" className="linkitem" title="Join Us">Join Us</Link><br />
                <Link to="/page/terms-and-conditions" className="linkitem" title="Terms & Conditions">Terms & Conditions</Link><br />
            </div>
        </div>
    </div>
);

export default FooterUpper;