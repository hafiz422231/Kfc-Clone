import React from 'react'; 
import './category.scss';
import BucketButton from '../bucketButton/bucketbutton';
import {Link} from 'react-router-dom';

const Category = ({ categoryTitle, items }) => {

    return(
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pl-0 pr-0 pt-3 pb-3">
                <div className="card text-center">
                    <h3 className="text-uppercase">{categoryTitle}</h3>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row">

                    {
                        items.map( item => (
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
                                        <Link to={`/${item.route}`}>
                                            <BucketButton price={item.price} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Category;