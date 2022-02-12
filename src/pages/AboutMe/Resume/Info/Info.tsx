import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import './Info.sass';

interface InfoProps {
    location: string,
}

const Info: FC<InfoProps> = (props) => {
    return (
        <div className='about__job-and-location'>
            {props.location ?
                <>
                    <div className='about__job'>Web-Developer</div>
                    <div className='about__location'>
                        <FontAwesomeIcon className='location__icon' icon={faMapMarkerAlt}/>
                        {props.location}
                    </div>
                </>
                :
                <div className='skeleton skeleton-text' style={{maxWidth: '250px'}}/>
            }
        </div>
    );
};

export default Info;