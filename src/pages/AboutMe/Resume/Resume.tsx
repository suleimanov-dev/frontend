import React, {FC} from 'react';

import {MEDIA_URL} from '@/config';
import Info from '@pages/AboutMe/Resume/Info/Info';
import ContactLinks from '@pages/AboutMe/Resume/ContactLinks/ContactLinks';
import TechBlock from '@pages/AboutMe/Resume/TechBlock/TechBlock';
import DownloadResumeButton from '@components/DownloadResumeButton/DownloadResumeButton';

import './Resume.sass';

interface ResumeProps {
    portrait: string,
    name: string,
    location: string,
    contactLinks: object[],
    technologyBlocks: object[]
}

const Resume: FC<ResumeProps> = (props) => {
    return (
        <div className='main--about-me__block resume'>
            {props.portrait ?
                <img
                    className='resume__portrait skeleton'
                    // @ts-ignore
                    onLoad={e => e.target.classList.remove('skeleton')}
                    src={MEDIA_URL + props.portrait}
                    alt='My portrait'
                />
                :
                <div className='resume__portrait skeleton'/>
            }
            <div className='resume__about'>
                <h1 className='about__name'>
                    {props.name ?
                        props.name
                        :
                        <div className='skeleton skeleton-text' style={{maxWidth: '400px'}}/>
                    }
                </h1>
                <Info location={props.location}/>
                <ContactLinks contactLinks={props.contactLinks}/>
                <DownloadResumeButton extraClass='download-resume-btn--resume'/>
                <TechBlock technologyBlocks={props.technologyBlocks}/>
            </div>
        </div>
    );
};

export default Resume;
