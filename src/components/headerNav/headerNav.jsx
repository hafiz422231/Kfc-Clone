/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import './headerNav.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../../appData/topNavBar';
import NavItem from './NavItems';

class NavbarSection extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            navbar: NavBar
        }
    }

    render(){

        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm 12 p-0">
                <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light bg-light pl-0 pr-0">

                        <div className="navbar-nav">
                            
                            {
                                this.state.navbar.map( ({ id, ...allOtherProps }) => (
                                    <NavItem key={id} {...allOtherProps} />
                                ))
                            }   

                        </div>
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link active" to="/">
                                <img src={`/cartIcon.jpg`} width="35px" height="30px" alt="CartIcon"/>
                                <span
                                style={{ position: 'absolute', right: '21px',top: '18px', color: 'white' }}
                                >0</span>
                            </Link>
                        </div>
                    
                </nav>
                </div>
            </div>
        </div>
    );
  }  
}
export default NavbarSection;