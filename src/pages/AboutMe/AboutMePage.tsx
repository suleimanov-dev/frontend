import React, {FC, useEffect, useState} from 'react';

import MainInfoService from '@services/MainInfoService';
import Resume from '@pages/AboutMe/Resume/Resume';
import Timeline from '@pages/AboutMe/Timeline/Timeline';

import './AboutMePage.sass';
import Header from '@components/Header/Header';

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({
        portrait: '',
        name: '',
        location: '',
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
        <>
            <Header/>
            <main className='main--about-me'>
                <Resume
                    portrait={mainInfo['portrait']}
                    name={mainInfo['name']}
                    location={mainInfo['location']}
                    contactLinks={mainInfo['contact_links']}
                    technologyBlocks={mainInfo['technology_blocks']}
                />
                <Timeline/>
            </main>
        </>
    );
};

export default AboutMePage;
