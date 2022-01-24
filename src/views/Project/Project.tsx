import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Project: FC = () => {
    const params = useParams();

    return <div>Project {params.projectName} page</div>;
};

export default Project;
