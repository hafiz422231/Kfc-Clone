import React from 'react';
import './checkOut.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faLessThan } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import GuestAccount from './guestAccount';


const ChecktOutPage = () => {
    return(
        <div>
            <div className="container-fluid">
                <div className="row align-items">
                    <Link to="/" className="lessThan">
                        <FontAwesomeIcon icon={faLessThan} size="sm" className="mr-3" />Back
                    </Link>                    
                    <img src="/kfc_logo.png" alt="logo" width="40px" />
                    <Link to="/">
                        <FontAwesomeIcon icon={faInfoCircle} style={{ marginTop: '13px', color: 'black' }} />
                    </Link>
                </div>
            </div>
            <div className="container-fluid1 pt-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12 col-sm-8">
                            <h4 className="text-center mt-2 mb-4"><b>CHECKOUT</b></h4>
                            <div className="card-login">

                                <GuestAccount />

                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-4">
                            <div className="totalCheck">
                                <div className="innerdivcheck">
                                    <h5 className="ml-4 mb-3">ORDER SUMMARY</h5>
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <p className="col-md-6 float-left col-lg-6 col-sm-6 col-xs-6">SubTotal</p>
                                        <p className="col-md-6 col-lg-6 float-right text-right col-sm-6 col-xs-6">PKR 176</p>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <p className="col-md-6 col-lg-6 float-left col-sm-6 col-xs-6">Shipping</p>
                                        <p className="col-md-6 col-lg-6 float-right text-right col-sm-6 col-xs-6">PKR 30</p>
                                    </div><br /><br />
                                    <hr />
                                    <div className="col-md-12 clear-fix col-lg-12 col-sm-12 col-xs-12">
                                        <h4 className="col-md-6 col-lg-6 float-left col-sm-6 col-xs-6">Total</h4>
                                        <h5 className="col-md-6 col-lg-6 float-right text-right col-sm-6 col-xs-6">PKR 30</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecktOutPage;