import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';
import {prettifyDateString, capitalize} from '@utils/helpers';

import classes from './MainInfo.module.sass';

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
        <div className={classes['main-info']}>
            <div className={classes['icon-name']}>
                <img className={classes['icon-name__icon']} src={`${MEDIA_URL}/${props.icon}`} alt="Project icon"/>
                <div className={classes['icon-name__name']}>{props.name}</div>
            </div>
            <div className={classes['dev-info']}>
                <div className={classes['dev-info__element']}>
                    Date created:&nbsp;<span>{prettifyDateString(props.monthCreated)}</span>
                </div>
                <div className={classes['dev-info__element']}>
                    Involvement:&nbsp;<span>{capitalize(props.involvement)}</span>
                </div>
                <div className={classes['dev-info__element']}>
                    Designation:&nbsp;<span>{capitalize(props.designation)}</span>
                </div>
            </div>
            {props.links.length > 0 ?
                <div className={classes['links']}>
                    {props.links.map((link: any) => (
                        <a
                            className={classes['link']}
                            href={link['link']}
                            target="_blank"
                            title={link['link_type']['name']}
                            key={link['id']}
                        >
                            <div className={classes['link__icon']}>
                                <svg data-src={MEDIA_URL + link['link_type']['icon']}/>
                            </div>
                            <div className={classes['link__link']}>{link['link']}</div>
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