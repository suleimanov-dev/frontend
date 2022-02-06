import React, {FC} from 'react';

import {MEDIA_URL} from '@/config';
import {prettifyDateString, capitalize} from '@utils/helpers';

import './MainInfo.sass';

interface MainInfoProps {
    icon: string,
    name: string,
    monthCreated: string,
    involvement: string,
    designation: string,
}

const MainInfo: FC<MainInfoProps> = (props) => {
    return (
        <div className='projects-element__main-info'>
            <img
                className='projects-element__icon'
                src={MEDIA_URL + props.icon}
                alt="Project icon"
            />
            <div className='projects-element__content'>
                <div className='projects-element__name'>{props.name}</div>
                <div className='projects-element__stats'>
                    {prettifyDateString(props.monthCreated)}
                    &nbsp;&#x7C;&nbsp;
                    {capitalize(props.involvement)}
                    &nbsp;&#x7C;&nbsp;
                    {capitalize(props.designation)}
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
