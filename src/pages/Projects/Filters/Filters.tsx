import React, {FC, useEffect, useState} from 'react';

import ProjectFiltersService from '@services/ProjectFiltersService';
import SearchByNameForm from '@pages/Projects/Filters/SearchByNameForm/SearchByNameForm';
import ProjectType from '@pages/Projects/Filters/ProjectType/ProjectType';
import TechStack from '@pages/Projects/Filters/TechStack/TechStack';
import InstrumentStack from '@pages/Projects/Filters/InstrumentStack/InstrumentStack';
import TimePeriod from '@pages/Projects/Filters/TimePeriod/TimePeriod';
import ApplyBtn from '@pages/Projects/Filters/ApplyBtn/ApplyBtn';

import classes from './Filters.module.sass';

const Filters: FC = () => {
    const [filters, setFilters] = useState({
        types: {involvement: [], designation: []},
        technologies: [],
        instruments: [],
        time_period: {from: '', to: ''}
    });

    useEffect(() => {
        fetchFilters().then();
    }, []);

    async function fetchFilters() {
        const filters = await ProjectFiltersService.list();
        setFilters(filters);
    }

    return (
        <div className={classes['filters']}>
            <SearchByNameForm />
            <div className={classes['filters-list']}>
                <ProjectType
                    involvementTypes={filters['types']['involvement']}
                    designationTypes={filters['types']['designation']}
                />
                <TechStack technologies={filters['technologies']} />
                <InstrumentStack instruments={filters['instruments']} />
                <TimePeriod timePeriod={filters['time_period']} />
                <ApplyBtn />
            </div>
        </div>
    );
};

export default Filters;