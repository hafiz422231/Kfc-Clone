import React from 'react';
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button';

const ScrollBtn = () => {
    
    return(
        <ScrollUpButton 
         ContainerClassName="ScrollUpButton__Container bg-white btn btn-outline-info" 
         TransitionClassName= "ScrollUpButton__Toggled"
         StopPosition={0}
         ShowAtPosition={150}
         AnimationDuration={1000}
         EasingType='easeOutCubic'  
         style={{ fontSize: '11px', padding: '4px 7px', color: 'black', border: '1px solid lightgrey' }}
         ToggledStyle={{ right: '15%', bottom: '35%'}}
        />
    );
}

export default ScrollBtn;