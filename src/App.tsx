import React from 'react';
import {Routes, Route} from 'react-router-dom';

import NotFound from '@pages/NotFound/NotFound';
import AboutMePage from '@pages/AboutMe/AboutMePage';
import ProjectPage from '@pages/Project/ProjectPage';
import ProjectsPage from '@pages/Projects/ProjectsPage';

import '@styles/App.sass';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<NotFound/>} />
                <Route index element={<AboutMePage/>}/>
                <Route path='portfolio'>
                    <Route index element={<ProjectsPage/>}/>
                    <Route path=':projectName' element={<ProjectPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
