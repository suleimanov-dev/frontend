import React, {FC, useEffect, useState} from 'react';

import MainInfoService from '@services/MainInfoService';
import Resume from '@pages/AboutMe/Resume/Resume';
import Timeline from '@pages/AboutMe/Timeline/Timeline';

import classes from './AboutMePage.module.sass'

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({
        name: '',
        portrait: '',
        contact_links: [],
        technology_blocks: [],
        resume_file: ''
    });

    useEffect(() => {
        fetchMainInfo().then();
    }, []);

    async function fetchMainInfo() {
        const mainInfo = await MainInfoService.get();
        setMainInfo(mainInfo);
    }

    return (
        <main className={classes['main']}>
            <Resume
                portrait={mainInfo['portrait']}
                name={mainInfo['name']}
                contactLinks={mainInfo['contact_links']}
                technologyBlocks={mainInfo['technology_blocks']}
            />
            <Timeline/>
        </main>
    );
};

export default AboutMePage;
