import React, {FC, useEffect, useMemo, useState} from 'react';

import ProjectService from '@services/ProjectService';
import SearchByNameForm from '@pages/Projects/SearchByNameForm/SearchByNameForm';
import Projects from '@pages/Projects/Projects/Projects';

import './ProjectsPage.sass';
import Header from '@components/Header/Header';

const ProjectsPage: FC = () => {
    const [projects, setProjects] = useState([]);
    const [isProjectsLoading, setIsProjectsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
        return projects.filter((project: any) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }, [projects, searchQuery]
    );

    useEffect(() => {
        fetchProjects().then();
    }, []);

    async function fetchProjects() {
        const projects = await ProjectService.list();
        setProjects(projects);
        setIsProjectsLoading(false);
    }

    return (
        <>
            <Header/>
            <main className='main--projects'>
                <SearchByNameForm onSearchQueryChange={setSearchQuery}/>
                <Projects projects={filteredProjects} isLoading={isProjectsLoading}/>
            </main>
        </>
    );
};

export default ProjectsPage;
