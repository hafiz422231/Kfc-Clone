/* eslint-disable eqeqeq */
import React from 'react';
import Collections from '../../appData/collections';
import HomeProductDisplay from './homeproductDisplay';

const HomeCards = () => {
    
    const homeData = Collections.filter( val => val.id == 4 );

   return (
    <div className="container mt-4 mb-4">
        {
            homeData.map( ({ id, ...otherProps }) => (
                <HomeProductDisplay key={id} {...otherProps} />
            ))  
        }
    </div>
  );
}
export default HomeCards;