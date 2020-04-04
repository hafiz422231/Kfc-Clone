/* eslint-disable no-unused-vars */
import React from 'react';

function Footer(){

    const style = {
        textDecoration: "underline",
        color: "red"
    };

    return(
        <div style={{ textAlign: 'center', fontSize: '13px' }}>
            <p style={{marginBottom: '4px', padding: '0px'}}>&copy; 2019 KFC Pakistan. All rights reserved.</p>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
                <a style={style} href={'https://fishry.com'}>eCommerce</a>
                <p style={{ marginRight: '3px', marginLeft: '3px', marginTop: '0px' }}> by </p>
                <a style={style} href={'https://fishry.com'}>Fishry</a>
            </div>
        </div>
    );
}

export default Footer;