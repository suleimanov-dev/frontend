import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import './Info.sass';

const Info: FC = () => {
    return (
        <div className='about__job-and-location'>
            <div className='about__job'>Web-Developer</div>
            <div className='about__location'>
                <FontAwesomeIcon className='location__icon' icon={faMapMarkerAlt}/>
                Kazan, Russia
            </div>
        </div>
    );
};

export default Info;