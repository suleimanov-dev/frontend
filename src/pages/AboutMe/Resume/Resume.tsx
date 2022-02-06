import React, {FC} from 'react';

import {MEDIA_URL} from '@/config';
import Info from '@pages/AboutMe/Resume/Info/Info';
import ContactLinks from '@pages/AboutMe/Resume/ContactLinks/ContactLinks';
import TechBlock from '@pages/AboutMe/Resume/TechBlock/TechBlock';

import './Resume.sass';

interface ResumeProps {
    portrait: string,
    name: string,
    contactLinks: object[],
    technologyBlocks: object[]
}

const Resume: FC<ResumeProps> = (props) => {
    return (
        <div className='main--about-me__block resume'>
            <img className='resume__portrait' src={MEDIA_URL + props.portrait} alt='My portrait'/>
            <div className='resume__about'>
                <h1 className='about__name'>{props.name}</h1>
                <Info/>
                <ContactLinks contactLinks={props.contactLinks}/>
                <TechBlock technologyBlocks={props.technologyBlocks}/>
            </div>
        </div>
    );
};

export default Resume;
