import React from 'react'; 
import Category from './category';
import Collections from '../../appData/collections';

const DisplayCard = ({ match }) =>{

    const data = Collections.filter( value => match.params.mealsId === value.linkUrl )
    
    return (
        <div className="container">
            {
                data.map( ({ id,categoryTitle , ...otherProps  }) =>(
                    <Category key={id} categoryTitle={categoryTitle} {...otherProps} />
                ))
            }
            
        </div>
    );

}
export default DisplayCard;