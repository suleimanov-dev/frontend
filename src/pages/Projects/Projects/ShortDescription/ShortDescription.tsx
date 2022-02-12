import React, {FC} from 'react';

import './ShortDescription.sass';

interface ShortDescriptionProps {
    shortDescription: string,
}

const ShortDescription: FC<ShortDescriptionProps> = (props) => {
    return (
        <div className='projects-element__short-description'>
            {props.shortDescription ?
                props.shortDescription
                :
                <>
                    <div className='skeleton skeleton-text'/>
                    <div className='skeleton skeleton-text'/>
                    <div className='skeleton skeleton-text'/>
                </>
            }
        </div>
    );
};

export default ShortDescription;
