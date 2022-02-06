import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';
import {prettifyDateString, capitalize} from '@utils/helpers';

import './MainInfo.sass';

interface MainInfoProps {
    name: string,
    icon: string,
    monthCreated: string,
    involvement: string,
    designation: string,
    links: object[],
}

const MainInfo: FC<MainInfoProps> = (props) => {
    return (
        <div className='main--project__block project__main-info'>
            <div className='icon-name'>
                <img className='icon-name__icon' src={MEDIA_URL + props.icon} alt="Project icon"/>
                <div className='icon-name__name'>{props.name}</div>
            </div>
            <div className='dev-info'>
                <div className='dev-info__element'>
                    Date created:&nbsp;<span>{prettifyDateString(props.monthCreated)}</span>
                </div>
                <div className='dev-info__element'>
                    Involvement:&nbsp;<span>{capitalize(props.involvement)}</span>
                </div>
                <div className='dev-info__element'>
                    Designation:&nbsp;<span>{capitalize(props.designation)}</span>
                </div>
            </div>
            {props.links.length > 0 ?
                <div className='links'>
                    {props.links.map((link: any) => (
                        <a
                            className='link'
                            href={link['link']}
                            target="_blank"
                            title={link['link_type']['name']}
                            key={link['id']}
                        >
                            <div className='link__icon'>
                                <svg data-src={MEDIA_URL + link['link_type']['icon']}/>
                            </div>
                            <div className='link__link'>{link['link']}</div>
                        </a>
                    ))}
                </div>
                :
                null
            }
        </div>
    );
};

export default MainInfo;