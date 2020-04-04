/* eslint-disable no-unused-vars */
import React from 'react';

class AboutUs extends React.Component  {

    render(){

        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm 12 p-3 bg-light mt-4 mb-3">
                    <b style={{ fontSize: '22px', fontFamily: 'sans-serif' }} title="About Us">About Us</b>    
                </div>
                <div className="col-lg-12 col-md-12 col-sm 12 pl-4 pr-4 mt-2 mb-4">
                    <img src='/aboutPage/about.jpg' alt="" width="100%" style={{ position: 'relative' }} />
                </div>
            </div>
        </div>
    );
  }  
}
export default AboutUs;