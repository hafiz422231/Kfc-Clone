import React,{ useState } from 'react';
import './sidecheckOut.scss';
import AreaSelectionOption from './areaSelectOption';
import ItemAddCheckOut from './itmesAddcheckout/itemsAddCheckOut';

import {Link} from 'react-router-dom'
import {Animated} from 'react-animated-css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import cities from '../../../appData/cityNames';

const SideCheckOutBar = props => {

    const [city, setCity] = useState('');
    const [ era,setEra ] = useState('');
    const[ showContent,setShowContent ] = useState();
    const [ clickNext,setClickNext ] = useState(false);

    const handleCityChange = event => {
        setCity(event.target.value);
    };

    const handleEraChange = val => {
        setEra(val);
    };

    const content = (c) => {
        setShowContent(c)
    }

    const handleNextProceedure = () => {
        if(city !== '' && era !== ''){
            setClickNext(true);
        }
        else{
            setClickNext(false);
        }
    }

    const editClick = () => {
        setClickNext(false)
    }

    return(
        <div className="mainWrapper">
           <Animated animationIn="slideInRight" animationOut="rollOut" isVisible={true}> 
            <div className="black-header">
                <div className="row text-white pl-1 pr-1">
                    <div className="col-md-4 col-lg-4 pt-3" style={{ fontWeight: 'bold' }}>
                        YOUR BUCKET
                    </div>
                    <div className="col-md-4 col-lg-4 pt-4 text-center">
                        <img src="/cartIcon1.jpg" alt="bucket" width="42%" />
                            <p className="value">{ showContent ? 0 : props.data.length }</p>
                    </div>
                    <div className="col-md-4 col-lg-4 pt-4" style={{ color: 'red', fontWeight: 'bold' }}>
                        PKR { showContent ? 0 : props.data.map( m => { return m.price } )}
                    </div>
                </div>
            </div>

            {
                showContent === true ? 
                    <Animated isVisible={true} animationIn="slideInLeft" animationOut="slideInRight">
                        <div><h6 className="text-center pt-5" style={{ fontFamily: 'serif' }}>
                            Sorry, Please add products</h6></div>
                    </Animated>   
                : 
                <div className="form-delivery">

                    <h6 style={{ fontWeight: 'bold' }} className="pt-2 pb-2 text-center">
                        { clickNext ? '' : 'SELECT DELIVERY AREA'}
                    </h6>
                    
                    { clickNext ? 

                        <Animated isVisible={true} animationIn="slideInLeft" animationOut="slideInRight">
                            <div className="text-center ml-3 mr-3 pt-3" style={{ border: '1px solid red' }}>
                                <p style={{ fontSize: '11px' }}>
                                    For Delivery To {era} | <button 
                                                            style={{ color: 'red', border: 'none', textDecoration: 'underline', background: 'none' }}
                                                            onClick={editClick}
                                                            >
                                                            EDIT</button>
                                        </p>
                            </div>
                        </Animated>

                    : 
                
                    <div className="form-area pl-3 pr-3">
                        <FormControl className="w-100">
                            <InputLabel id="city" style={{ color: 'red' }}>City</InputLabel>
                                <Select
                                style={{ color: 'red', fontSize: '13px' }}
                                labelId="city"
                                id="city"
                                value={city}
                                onChange={handleCityChange}
                                >
                                {
                                    cities.map( m => (
                                        <MenuItem value={m.value} key={m.id} style={{ color: 'red', background: 'none', fontSize: '13px' }}>
                                            {m.value}
                                        </MenuItem>
                                    ))
                                }    
                                </Select>
                        </FormControl>
                        <FormControl className="w-100 mt-3">
                            {
                                cities.filter( m => m.value === city ).map( selected => (
                                    <AreaSelectionOption key={selected.id} callMe={handleEraChange} {...selected} />
                                ))
                            }
                        </FormControl>

                        <button className="btn btn-block color-red mt-3" onClick={handleNextProceedure}>NEXT</button>

                    </div>
                }  
                
                    <div className="pl-3 pr-3">
                        <ItemAddCheckOut lists={props.data} callMe={content} />
                    </div>

                    { clickNext &&
                        <Animated isVisible={true} animationIn="slideInUp" animationOut="slideOutUp">
                            <div className="btns ml-1 mr-1 pt-5">
                                <button 
                                 className="btn-block" 
                                 style={{ color: 'black', opacity: .6, fontSize: '12px', fontWeight: 'bolder', border: 'none', background: 'none' }}
                                 onClick={() => setShowContent(true)}
                                 >CLEAR BUCKET</button>
                                <Link to="/page/checkout" className="link-under">
                                    <button 
                                    className="btn-block" 
                                    style={{ color: 'white', opacity: 1, fontSize: '17px', fontFamily: 'serif' ,fontWeight: 'bold', border: 'none', background: 'red', paddingBottom: '11px', paddingTop: '11px' }}>CHECKOUT</button>
                                </Link>
                                <Link to="/page/cart" className="link-under">
                                    <button className="btn-block" style={{ color: 'red', opacity: 1, fontSize: '12px', fontWeight: 'bolder', border: 'none', background: 'none' }}>VIEW CART</button>
                                </Link>
                            </div>
                        </Animated>
                    }

                </div>
            }
            
        </Animated>
        </div>
    );
};

export default SideCheckOutBar;