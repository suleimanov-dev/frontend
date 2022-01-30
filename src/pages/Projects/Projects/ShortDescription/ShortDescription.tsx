import React, {FC} from 'react';

import classes from '@pages/Projects/Projects/ShortDescription/ShortDescription.module.sass'

interface ShortDescriptionProps {
    shortDescription: string,
}

const ShortDescription: FC<ShortDescriptionProps> = (props) => {
    return (
        <div className={classes['short-description']}>
            {props.shortDescription}
        </div>
    );
};

export default ShortDescription;
