import React, {FC, useEffect, useState} from 'react';

import MainInfoService from '@services/MainInfoService';
import Header from '@pages/AboutMe/Header/Header';
import Resume from '@pages/AboutMe/Resume/Resume';

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({
        name: '',
        portrait: '',
        contact_links: [],
        technology_blocks: []
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
            <main>
                <Resume
                    portrait={mainInfo['portrait']}
                    name={mainInfo['name']}
                    contactLinks={mainInfo['contact_links']}
                    technologyBlocks={mainInfo['technology_blocks']}
                />
            </main>
        </>
    );
};

export default AboutMePage;
