import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import classes from './ResumeInfo.module.sass';

const ResumeInfo: FC = () => {
    return (
        <div className={classes['resume__info']}>
            <div className={classes['job']}>Web-Developer</div>
            <div className={classes['location']}>
                <FontAwesomeIcon className={classes['location__icon']} icon={faMapMarkerAlt}/>
                Kazan, Russia
            </div>
        </div>
    );
};

export default ResumeInfo;