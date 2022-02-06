import React, {FC, useEffect, useMemo, useState} from 'react';

import ProjectService from '@services/ProjectService';
import SearchByNameForm from '@pages/Projects/SearchByNameForm/SearchByNameForm';
import Projects from '@pages/Projects/Projects/Projects';

import './ProjectsPage.sass';

const ProjectsPage: FC = () => {
    const [projects, setProjects] = useState([]);
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
    }

    return (
        <main className='main--projects'>
            <SearchByNameForm onSearchQueryChange={setSearchQuery}/>
            <Projects projects={filteredProjects}/>
        </main>
    );
};

export default ProjectsPage;
