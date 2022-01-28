import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';
import MainInfoService from '@services/MainInfoService';

import classes from './AboutMePage.module.sass';

const techBlockExtraText: any = {
    'BACKEND': ' for back-end',
    'DB': ' as DB',
    'FRONTEND': ' for front-end',
    'DESIGN': ' to design prototypes',
    'OTHER': '',
};

const createHighlight = (): HTMLSpanElement => {
    let span = document.createElement('span');
    span.className = classes['highlight'];
    return span;
}

const processTechBlockText = (text: string): string => {
    let techBlockText = document.createElement('span');
    let span = createHighlight();

    [...text].forEach(letter => {
        if ((/[a-zA-Z]/).test(letter)) {
            span.innerHTML += letter;
        } else {
            span.innerHTML.length > 0 ? techBlockText.appendChild(span) : null;
            techBlockText.innerHTML += letter;
            span = createHighlight();
        }
    })

    span.innerHTML.length > 0 ? techBlockText.appendChild(span) : null;
    return techBlockText.innerHTML;
};

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({
        name: '',
        portrait: '',
        contact_links: [],
        technology_blocks: []
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
                <Link className={classes['nav-link']} to="/projects">Projects ---{'>'}</Link>
                <button className={classes['download-btn']}>Download resume</button>
            </header>
            <main>
                <div className={classes['resume']}>
                    <img className={classes['portrait']} src={MEDIA_URL + mainInfo.portrait} alt="My portrait"/>
                    <div className={classes['content']}>
                        <h1 className={classes['name']}>{mainInfo.name}</h1>
                        <div className={classes['info']}>
                            <div className={classes['job']}>Web-Developer</div>
                            <div className={classes['location']}>
                                <FontAwesomeIcon className={classes['icon']} icon={faMapMarkerAlt}/>
                                Kazan, Russia
                            </div>
                        </div>
                        <div className={classes['contact-links']}>
                            {mainInfo.contact_links.map((link: any) => (
                                <a className={classes['contact-link']} href={link.link} title={link.name} target="_blank" key={link.id}>
                                    <svg className={classes['icon']} data-src={MEDIA_URL + link.icon}/>
                                </a>
                            ))}
                        </div>
                        <div className={classes['tech-blocks']}>
                            {mainInfo.technology_blocks.map((techBlock: any, index: number) => (
                                <div
                                    className={`${
                                        classes['tech-block']
                                    } ${
                                        `tech-block--${index + 1}` in classes ? 
                                            classes[`tech-block--${index + 1}`] : classes['tech-block--none']
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: `&bull; ${
                                            processTechBlockText(techBlock.content) + techBlockExtraText[techBlock.type]
                                        };`
                                    }}
                                    key={techBlock.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutMePage;
