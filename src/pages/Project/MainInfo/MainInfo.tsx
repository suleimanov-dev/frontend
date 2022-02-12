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
    isLoading: boolean,
}

const MainInfo: FC<MainInfoProps> = (props) => {
    return (
        <div className='main--project__block project__main-info'>
            <div className='icon-name'>
                {props.icon ?
                    <img
                        className='icon-name__icon skeleton'
                        // @ts-ignore
                        onLoad={e => e.target.classList.remove('skeleton')}
                        src={MEDIA_URL + props.icon}
                        alt="Project icon"
                    />
                    :
                    <div className='icon-name__icon skeleton'/>
                }
                <div className='icon-name__name'>
                    {props.name ?
                        props.name
                        :
                        <div className='skeleton skeleton-text' style={{width: '300px'}}/>
                    }
                </div>
            </div>
            <div className='dev-info'>
                <div className='dev-info__element'>
                    {props.monthCreated ?
                        <>Date created:&nbsp;<span>{prettifyDateString(props.monthCreated)}</span></>
                        :
                        <div className='skeleton skeleton-text' style={{width: '150px'}}/>
                    }
                </div>
                <div className='dev-info__element'>
                    {props.involvement ?
                        <>Involvement:&nbsp;<span>{capitalize(props.involvement)}</span></>
                        :
                        <div className='skeleton skeleton-text' style={{width: '150px'}}/>
                    }
                </div>
                <div className='dev-info__element'>
                    {props.designation ?
                        <>Designation:&nbsp;<span>{capitalize(props.designation)}</span></>
                        :
                        <div className='skeleton skeleton-text' style={{width: '150px'}}/>
                    }
                </div>
            </div>
            {!props.isLoading ?
                props.links.length > 0 ?
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
                :
                <div className='links'>
                    {[...Array(2).keys()].map((index: number) => (
                        <div
                            className='link skeleton'
                            style={{width: '200px', height: '24px'}}
                            key={index}
                        />
                    ))}
                </div>
            }

        </div>
    );
};

export default MainInfo;