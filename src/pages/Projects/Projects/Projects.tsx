import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import MainInfo from '@pages/Projects/Projects/MainInfo/MainInfo';
import ShortDescription from '@pages/Projects/Projects/ShortDescription/ShortDescription';
import Labels from '@pages/Projects/Projects/Labels/Labels';

import './Projects.sass';

interface ProjectsProps {
    projects: object[],
}

const Projects: FC<ProjectsProps> = (props) => {
    return (
        <div className='projects'>
            {props.projects.length > 0 ? props.projects.map((project: any) => (
                <Link
                    className='projects__element'
                    to={`/portfolio/${project['name']}/`}
                    key={project['id']}
                >
                    <MainInfo
                        icon={project['icon']}
                        name={project['name']}
                        monthCreated={project['month_created']}
                        involvement={project['involvement']}
                        designation={project['designation']}
                    />
                    <ShortDescription shortDescription={project['short_description']}/>
                    <Labels technologies={project['technologies']} instruments={project['instruments']}/>
                </Link>
            )) : <div className='projects-not-found-text'>Projects not found</div>}
        </div>
    );
};

export default Projects;