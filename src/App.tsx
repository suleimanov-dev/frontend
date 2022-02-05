import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from '@/components/Header/Header';
import AboutMePage from '@pages/AboutMe/AboutMePage';
import ProjectPage from '@pages/Project/ProjectPage';
import ProjectsPage from '@pages/Projects/ProjectsPage';

import '@styles/App.sass';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<AboutMePage/>}/>
                <Route path="portfolio">
                    <Route index element={<ProjectsPage/>}/>
                    <Route path=":projectName" element={<ProjectPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
