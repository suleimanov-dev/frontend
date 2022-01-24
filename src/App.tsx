import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Project from './views/Project/Project';

const App = () => {
    return (
        <Routes>
            <Route path="" element={<AboutMe />} />
            <Route path="projects">
                <Route path="" element={<Projects />} />
                <Route path=":projectName" element={<Project />} />
            </Route>
        </Routes>
    );
};

export default App;
