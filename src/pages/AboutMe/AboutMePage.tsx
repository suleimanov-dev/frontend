import React, {FC, useEffect, useState} from 'react';

import MainInfoService from '@services/MainInfoService';

import classes from './AboutMePage.module.sass';

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({name: ''});

    useEffect(() => {
        fetchMainInfo().then((r) => {
        });
    }, []);

    async function fetchMainInfo() {
        const mainInfo = await MainInfoService.get();
        setMainInfo(mainInfo);
    }

    return (
        <header className={classes.myText}>
            My name is {mainInfo.name}
        </header>
    );
};

export default AboutMePage;
