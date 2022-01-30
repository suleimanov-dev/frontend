import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ProjectsInfoService from '@services/ProjectsInfoService';
import Header from '@pages/Project/Header/Header';
import MainInfo from '@pages/Project/MainInfo/MainInfo';
import Description from '@pages/Project/Description/Description';
import Overview from '@pages/Project/Overview/Overview';
import Labels from '@pages/Project/Labels/Labels';

import classes from './ProjectPage.module.sass'

const ProjectPage: FC = () => {
    const params = useParams();

    const [projectInfo, setProjectInfo] = useState({
        name: '',
        icon: '',
        month_created: '',
        involvement: '',
        designation: '',
        links: [],
        articles: [],
        overview_video: '',
        overview_video_preview: '',
        technologies: [],
        instruments: [],
    });

    useEffect(() => {
        fetchProjectInfo().then();
    }, []);

    async function fetchProjectInfo() {
        const projectInfo = await ProjectsInfoService.get(params.projectName);
        setProjectInfo(projectInfo);
    }

    return (
        <>
            <Header />
            <main className={classes['main']}>
                <MainInfo
                    name={projectInfo['name']}
                    icon={projectInfo['icon']}
                    monthCreated={projectInfo['month_created']}
                    involvement={projectInfo['involvement']}
                    designation={projectInfo['designation']}
                    links={projectInfo['links']}
                />
                <Description articles={projectInfo['articles']} />
                <Overview video={projectInfo['overview_video']} preview={projectInfo['overview_video_preview']} />
                <Labels technologies={projectInfo.technologies} instruments={projectInfo.instruments} />
            </main>
        </>
    );
};

export default ProjectPage;
