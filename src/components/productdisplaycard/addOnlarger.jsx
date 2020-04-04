/* eslint-disable eqeqeq */
import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CheckBoxx from './checkbox/checkboxOption';

  
class AddsOnLargeOptions extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            check: false,
            quatityAdd: [],
            sumOfQuantityAdd: null
        };
    };

    handleCheckChieldElement = (event) => {
        let items = this.props.products.forEach(pro => {
                    if (pro.title === event.target.value)
                        pro.isChecked =  event.target.checked
                    });
        
        this.setState({
            items: items
        });

        if(event.target.checked === true){
            this.setState({ 
                items: this.state.items.concat(event.target.value),
                check: event.target.checked,
            });
            this.state.quatityAdd.push(parseInt(this.props.products.filter( p => p.title === event.target.value).map(v => { return (v.Pro_price*v.quantity) })));
        }

        if(event.target.checked === false){
            let arr = this.state.items.filter( m => m === event.target.value ).pop();
            this.setState({ 
                items: this.state.items.filter( m => m !== arr ), 
                check: event.target.checked,
            });
            this.props.products.filter( p => p.title == arr ).map( a => {return a.quantity = 1})
        }
    }

        
    render() {
        
    const {callMe,products} = this.props;
    callMe(this.state.items,this.state.sumOfQuantityAdd);
    
    const style = {
        padding: '0px 8px 0px 9px',
        border: '1px solid red',
        borderRadius: '0px'
    }

    return(
        <div className=""> 
            <FormControl component="fieldset" className="m-0 p-0">
                {
                    products.map( (m) => (
                        <div className="d-flex justify-content-between" key={m.id}>
                            <div className="">
                            <FormGroup className="w-100">
                                <FormControlLabel
                                    control={ 
                                        <CheckBoxx key={m.id} handleCheckChieldElement={this.handleCheckChieldElement} {...m} />
                                    }
                                    label={m.title}
                                />
                            </FormGroup>
                            </div>
                            <div style={{ transform: 'translateY(8px)' }} className="pl-5 ml-5" key={m.id} >
                                    <div className="float-left mr-3" 
                                     style={{ transform: 'translateY(4px)'}} key={m.id}>PKR {m.Pro_price * m.quantity}</div>
                                    <div className="btn-group float-left">
                                        
                                        <button type="button" className="btn mr-1" style={style}
                                         onClick={ 
                                            this.state.check && (
                                                () => {
                                                   this.state.quatityAdd.pop(this.props.products.filter(p => p.title === m.title).map(v => {return (v.Pro_price*v.quantity)}));
                                                   let val = this.state.items.filter((p) => p == m.title)
                                                   m.quantity = m.quantity>1 ? parseInt(this.props.products.filter( p => p.title == val ).map( a => {return a.quantity})) - 1 : m.quantity = 1 ;
                                                }
                                            )
                                        }
                                        >-</button>
                                        
                                        <span style={{ transform: 'translateY(4px)'}}>{m.quantity}</span>
                                        
                                        <button disabled={m.isChecked ? false : true} type="button" className="btn ml-1" style={style}
                                         onClick={ 
                                             this.state.check && (
                                                () => {
                                                    this.state.quatityAdd.push(1 * m.Pro_price) 
                                                    let val = this.state.items.filter((p) => p == m.title)
                                                    m.quantity = parseInt(this.props.products.filter( p => p.title == val ).map( a => {return a.quantity})) + 1
                                                    this.setState({ sumOfQuantityAdd: this.state.quatityAdd.reduce( (total,m) => total + m, 0) }); 
                                                }

                                            )
                                         }
                                        
                                        >+</button>
                                    </div>
                            </div>
                        </div>   
                    ))
                }    
            </FormControl>
        </div>
    );
  }
}

export default AddsOnLargeOptions;

/**
 * <FormLabel component="legend">Gender</FormLabel>
            
 * <FormControlLabel
                     value="disabled"
                     disabled
                     control={<Radio />}
                     label="(Disabled option)"
                    />
 */