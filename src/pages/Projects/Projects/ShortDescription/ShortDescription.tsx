import React, {FC} from 'react';

import './ShortDescription.sass';

interface ShortDescriptionProps {
    shortDescription: string,
}

const ShortDescription: FC<ShortDescriptionProps> = (props) => {
    return (
        <div className='projects-element__short-description'>
            {props.shortDescription}
        </div>
    );
};

export default ShortDescription;
