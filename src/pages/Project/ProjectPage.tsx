import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ProjectService from '@services/ProjectService';
import MainInfo from '@pages/Project/MainInfo/MainInfo';
import Description from '@pages/Project/Description/Description';
import Overview from '@pages/Project/Overview/Overview';
import Labels from '@pages/Project/Labels/Labels';

import './ProjectPage.sass';
import Header from '@components/Header/Header';

const ProjectPage: FC = () => {
    const params = useParams();

    const [project, setProject] = useState({
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
        const project = await ProjectService.get(params.projectName);
        setProject(project);
    }

    return (
        <>
            <Header/>
            <main className='main--project'>
                <MainInfo
                    name={project['name']}
                    icon={project['icon']}
                    monthCreated={project['month_created']}
                    involvement={project['involvement']}
                    designation={project['designation']}
                    links={project['links']}
                />
                <Description articles={project['articles']}/>
                <Overview video={project['overview_video']} preview={project['overview_video_preview']}/>
                <Labels technologies={project.technologies} instruments={project.instruments}/>
            </main>
        </>
    );
};

export default ProjectPage;
