import React from 'react';
import Collections from '../../appData/collections';
import ShowItem from './showItem';

const CategoryItem = ({ match }) => {
    
    const data = Collections.filter( val => match.params.mealsId === val.linkUrl)
    //console.log(data);

    return(
        <div className="container">
            {
                data.map( ({ id , ...otherProps  }) => (
                    <ShowItem key={id} itemid={match.params.id} mealsId={match.params.mealsId} {...otherProps} />
                ))
            }        
        </div>
    );
}
export default CategoryItem;