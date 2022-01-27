import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';
import MainInfoService from '@services/MainInfoService';

import classes from './AboutMePage.module.sass';

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({
        name: '',
        portrait: '',
        contact_links: []
    });

    useEffect(() => {
        fetchMainInfo().then((r: any) => {
        });
    }, []);

    async function fetchMainInfo() {
        const mainInfo = await MainInfoService.get();
        setMainInfo(mainInfo);
    }

    return (
        <>
            <header>
                <Link className={classes['header__link']} to="/projects">Projects ---{'>'}</Link>
                <button className={classes['header__download-btn']}>Download resume</button>
            </header>
            <main>
                <div className={classes['resume']}>
                    <img className={classes['resume__portrait']} src={MEDIA_URL + mainInfo.portrait} alt="My portrait"/>
                    <div className={classes['resume__content']}>
                        <h1 className={classes['resume__name']}>{mainInfo.name}</h1>
                        <div className={classes['resume__info']}>
                            <div className={classes['resume__job']}>Web-Developer</div>
                            <div className={classes['resume__location']}>
                                <FontAwesomeIcon className={classes['resume__location__icon']} icon={faMapMarkerAlt}/>
                                Kazan, Russia
                            </div>
                        </div>
                        <div className={classes['resume__contact-links']}>
                            {mainInfo.contact_links.map((link: any) => (
                                <a href={link.link} target="_blank" key={link.id}>
                                    <svg data-src={MEDIA_URL + link.icon}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutMePage;
