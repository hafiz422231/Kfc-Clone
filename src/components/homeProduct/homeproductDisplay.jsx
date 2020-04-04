import React from 'react';
import {Link} from 'react-router-dom';
import BucketButton from '../bucketButton/bucketbutton';
import './homeproduct.scss';

const HomeProductDisplay = ({ categoryTitle,items }) => {
    
    const newItems = items.filter( item => item.id <=3);
    
    return (
        <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 p-0 text-center">
                <div className="card p-2">
                    <h4>{categoryTitle} Meals</h4>
                </div>
            </div>
            <div className="row mt-3">
                {
                    newItems.map( item => (
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="card p-2 Card">
                                
                                <Link to={`/${item.route}`}>
                                    <img src={item.image} alt={item.title} width="100%" />
                                </Link>

                                <div className="card-body pt-4 pb-0 pl-0 pr-0">
                                    <h6><b>{item.title}</b></h6>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                    <BucketButton price={item.price} />
                                </div>
                            </div>
                        </div>
                    ))                
                }            
            </div>
        </div>
    );
}

export default HomeProductDisplay;

/**
 * 
 * items.map( homedeal => (
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="card p-2 Card">
                                
                                <Link to={`/${homedeal.routeName}`}>
                                    <img src={homedeal.image} alt={homedeal.alttext} width="100%" />
                                </Link>

                                <div className="card-body pt-4 pb-0 pl-0 pr-0">
                                    <h6><b>{homedeal.title}</b></h6>
                                    <p className="card-text">
                                        {homedeal.description}
                                    </p>
                                    <BucketButton price={homedeal.price} />
                                </div>
                            </div>
                        </div>
                    ))
 */