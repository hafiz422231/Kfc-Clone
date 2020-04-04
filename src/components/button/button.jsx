import React from 'react';
import './button.scss';

const ButtonCustom = (props) => (
    <div className="button">
        {props.name}
    </div>
);

export default ButtonCustom;