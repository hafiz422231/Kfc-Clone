import React from 'react';

const HomeDisplayItem = ({ match }) => {
    console.log(match.params.ID)
    return(
        <div className="container">
            <div className="row">

                {match.params.ID}

            </div>
        </div>
    );
}

export default HomeDisplayItem;