import React from 'react';
import {Link} from 'react-router-dom';
import './bucketButton.scss';

const BucketButton = ({ price }) => (
    <div className="twicebutton mt-4">
        <Link to="">
            <button className="w-50 white-btn">PKR {price}</button>
            <button className="w-50 red-btn">ADD TO BUCKET</button>
        </Link>
    </div>
);

export default BucketButton;