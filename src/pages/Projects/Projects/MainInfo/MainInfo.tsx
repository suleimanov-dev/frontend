import React, {FC} from 'react';

import {MEDIA_URL} from '@/config';
import {prettifyDateString, capitalize} from '@utils/helpers';

import classes from '@pages/Projects/Projects/MainInfo/MainInfo.module.sass';

interface MainInfoProps {
    icon: string,
    name: string,
    monthCreated: string,
    involvement: string,
    designation: string,
}

const MainInfo: FC<MainInfoProps> = (props) => {
    return (
        <div className={classes['main-info']}>
            <img
                className={classes['main-info__icon']}
                src={MEDIA_URL + props.icon}
                alt="Project icon"
            />
            <div className={classes['main-info__info']}>
                <div className={classes['name']}>{props.name}</div>
                <div className={classes['info']}>
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
