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
            {props.icon ?
                <img
                    className='projects-element__icon skeleton'
                    // @ts-ignore
                    onLoad={e => e.target.classList.remove('skeleton')}
                    src={MEDIA_URL + props.icon}
                    alt="Project icon"
                />
                :
                <div className='projects-element__icon skeleton'/>
            }
            <div className='projects-element__content'>
                <div className='projects-element__name'>
                    {props.name ?
                        props.name
                        :
                        <div
                            className='skeleton skeleton-text'
                            style={{height: '.75em', marginBottom: 0, maxWidth: '300px'}}
                        />
                    }
                </div>
                <div className='projects-element__stats'>
                    {props.monthCreated && props.involvement && props.designation ?
                        <>
                            {prettifyDateString(props.monthCreated)}
                            &nbsp;&#x7C;&nbsp;
                            {capitalize(props.involvement)}
                            &nbsp;&#x7C;&nbsp;
                            {capitalize(props.designation)}
                        </>
                        :
                        <div className='skeleton skeleton-text' style={{maxWidth: '200px'}}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
