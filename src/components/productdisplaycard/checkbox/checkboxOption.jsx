import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxx = props => {
    return(
        <Checkbox
            type="checkbox"
            checked={props.isChecked}
            onClick={props.handleCheckChieldElement}
            key={props.id} 
            name={props.title} 
            value={props.title} 
        />
    );
}

export default CheckBoxx;