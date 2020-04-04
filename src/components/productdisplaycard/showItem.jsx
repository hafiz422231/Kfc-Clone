/* eslint-disable eqeqeq */
import React, {useState} from 'react';
import './showItem.scss';
import {Link} from 'react-router-dom';
import AddsOns from './addsOn'; 
import SideCheckOutBar from '../productdisplaycard/sidecheckoutBar/sidecheckOut';


const ShowItem = ({ itemid, mealsId , items }) => {
    
    const newdata = items.filter( item => item.id == itemid )
    const pri = newdata.map( p => p )

    let [ count,setCount ] = useState(1);
    let [ priceupdate,setPriceUpdate ] = useState();
    const [ bucketOpen,setBucketOpen ] = useState(false)


    const handleSideBar = () => {
        if(bucketOpen === true){
            setBucketOpen(false)
        }else{
            setBucketOpen(true)
        }
    }

    const changePriceDec = (price) => {
        setCount(count<=1 ? count = 1 : count - 1 )
    //    const original_price = price
    //    const new_price = original_price * count
    //    console.log(original_price);
    //    console.log(new_price);
    }

    const changePriceInc = (price) => {
        setCount( count = count + 1 )
    //    const original_price = price
    //    const new_price = original_price * count
    //    console.log(original_price);
    //    console.log(new_price);
    }

    const priceUpdate = (p) => {
        setPriceUpdate(p);
    }

    return(
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                {
                    newdata.map( m => (
                        <div className="row p-3">
                            <div className="col-md-5 col-lg-5 col-sm-12 text-right pr-0">
                                <img src={m.image} alt={m.title} width="420" height="300" />
                            </div>
                            <div className="col-md-7 col-lg-7 col-sm-12 right-side pr-5">
                                <div className="heading">
                                    <Link to="/" className="link ml-0">
                                        Home
                                    </Link> /
                                    <Link to={`/${m.backRoute}`} className="link">
                                        {mealsId}
                                    </Link> /
                                    <Link className="link">
                                        {m.id}
                                    </Link>
                                    <h5 className="mt-3 mb-3"><b>{m.title}</b></h5>
                                    <p>{m.description}</p>
                                    
                                    {/*
                                    Add on buttons
                                     */}

                                     <div className="pl-0 mt-4 mb-4 pr-5">
                                        <AddsOns addson={m.addon} callMe={priceUpdate}/>
                                     </div>

                                    
                                    <h3><b>PKR { (m.price*count) + priceupdate }</b></h3>
                                    <div className="w-100 mb-2 d-inline-flex">
                                        <div className="btn-group h-50 mr-5">
                                            <button type="button" className="btn" 
                                             onClick={ () => changePriceDec(m.price) }
                                            >-</button>
                                            <button type="button" className="btn">{count}</button>
                                            <button type="button" className="btn"
                                             onClick={ () => changePriceInc(m.price) }
                                            >+</button>
                                        </div>
                                        <div>
                                            <button
                                             className="btn text-white" 
                                             onClick={handleSideBar}
                                             style={{ backgroundColor: 'red' }}
                                            >
                                                ADD TO BUCKET
                                            </button>
                                        </div>    
                                    </div>
                                    
                                    <p>*Prices may vary at motorway outlets</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
                    { bucketOpen && 
                        <SideCheckOutBar data={pri} />
                    }    
        </div>
    );
}

export default ShowItem;