import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';



class AddsOnOptions extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked : false,
            name: ''
        };
    }

    handleChecked = (event) => {
        this.setState({
            name: event.target.value
        });
        if(this.state.isChecked !== false){
            this.setState({ name: null });
        }
    }

    render(){
        
        const {callMe,products} = this.props;
        callMe(this.state.name);

        return(
            <FormControl component="fieldset" className="m-0">
                    <RadioGroup>
                    {
                        products.map( m => (
                            <FormControlLabel
                                 control={<Radio />}
                                 defaultChecked={this.state.isChecked}
                                 onChange={this.handleChecked}
                                 key={m.id} name={m.value} value={m.value}
                                 label={m.value}
                            />
                        ))
                    }
                    </RadioGroup>
            </FormControl>
        );
  }
}

export default AddsOnOptions;

/**
 * const AddsOnOptions = ({ products }) => {

    const classes = useStyles();
    const [value, setValue] = React.useState('');
  
    const handleChangeOption = event => {
       setValue(event.target.value);
       console.log(value);
    };
  
    return(
        <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="gender" name="" value={value}>
                {
                    products.map( m => (
                        <FormControlLabel value={m.value} control={<Radio />} onChange={e => handleChangeOption(e)} label={m.value} key={m.id} />
                    ))
                }
                </RadioGroup>
        </FormControl>
    );
}

 */


/**
 * <FormLabel component="legend">Gender</FormLabel>
            
 * <FormControlLabel
                     value="disabled"
                     disabled
                     control={<Radio />}
                     label="(Disabled option)"
                    />
 */