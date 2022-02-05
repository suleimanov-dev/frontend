import React, {FC, useEffect, useState} from 'react';

import ProjectService from '@services/ProjectService';
import Header from '@pages/Projects/Header/Header';
import SearchByNameForm from '@pages/Projects/SearchByNameForm/SearchByNameForm';
import Projects from '@pages/Projects/Projects/Projects';

import classes from './ProjectsPage.module.sass';

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
                <SearchByNameForm/>
                <Projects projects={projects}/>
            </main>
        </>
    );
};

export default ProjectsPage;
