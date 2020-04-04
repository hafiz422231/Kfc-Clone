import React,{useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const AreaSelectionOption = props => {

    const [area, setArea] = useState('');
    
    const handleAreaChange = event => {
        setArea(event.target.value);
        props.callMe(event.target.value);
    };

    console.log(area)

    return(
        <React.Fragment>
            <InputLabel id="area" style={{ color: 'red' }}>Area</InputLabel>
            <Select
            style={{ color: 'red', fontSize: '13px' }}
            labelId="area"
            id="area"
            value={area}
            onChange={handleAreaChange}
            >
            {   props.areas.map( m => (
                    <MenuItem
                    value={m.value} 
                    key={m.id}
                    style={{ color: 'red', background: 'none', fontSize: '13px' }}
                    >
                        {m.value}
                    </MenuItem>
                ))
            }                                             
            </Select>
        </React.Fragment>
    );
};

export default AreaSelectionOption;