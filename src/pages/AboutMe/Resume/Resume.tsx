import React, {FC} from 'react';

import {MEDIA_URL} from '@/config';
import ResumeInfo from '@pages/AboutMe/Resume/Info/ResumeInfo';
import ResumeContactLinks from '@pages/AboutMe/Resume/ContactLinks/ResumeContactLinks';
import ResumeTechBlock from '@pages/AboutMe/Resume/TechBlock/ResumeTechBlock';

import classes from './Resume.module.sass';

interface ResumeProps {
    portrait: string,
    name: string,
    contactLinks: object[],
    technologyBlocks: object[]
}

const Resume: FC<ResumeProps> = (props) => {
    return (
        <div className={classes['resume']}>
            <img className={classes['portrait']} src={MEDIA_URL + props.portrait} alt="My portrait"/>
            <div className={classes['content']}>
                <h1 className={classes['name']}>{props.name}</h1>
                <ResumeInfo/>
                <ResumeContactLinks contactLinks={props.contactLinks}/>
                <ResumeTechBlock technologyBlocks={props.technologyBlocks}/>
            </div>
        </div>
    );
};

export default Resume;
