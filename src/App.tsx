import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMe/AboutMePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectPage from "./pages/Project/ProjectPage";

const App = () => {
    return (
        <Routes>
            <Route path="" element={<AboutMePage />} />
            <Route path="projects">
                <Route path="" element={<ProjectsPage />} />
                <Route path=":projectName" element={<ProjectPage />} />
            </Route>
        </Routes>
    );
};

export default App;
