import React, {FC, useEffect, useState} from 'react';

import Header from '@pages/Projects/Header/Header';
import Filters from '@pages/Projects/Filters/Filters';
import Projects from '@pages/Projects/Projects/Projects';

import classes from './ProjectsPage.module.sass';
import ProjectService from '@services/ProjectService';

const ProjectsPage: FC = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then();
    }, []);

    async function fetchProjects() {
        const projects = await ProjectService.list();
        setProjects(projects);
    }

    return (
        <>
            <Header/>
            <main className={classes['main']}>
                <Filters/>
                <Projects projects={projects}/>
            </main>
        </>
    );
};

export default ProjectsPage;
