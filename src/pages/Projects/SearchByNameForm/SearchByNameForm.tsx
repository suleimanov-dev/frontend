import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import classes from './SearchByNameForm.module.sass';

interface SearchByNameFormProps {
    setSearchQuery: Function,
}

const SearchByNameForm: FC<SearchByNameFormProps> = (props) => {
    return (
        <div className={classes['search-by-name']}>
            <label htmlFor='search-by-name'><FontAwesomeIcon icon={faSearch} /></label>
            <input
                id='search-by-name'
                type='text'
                name='search-by-name'
                placeholder='Project name'
                onChange={(e) => props.setSearchQuery(e.target.value)}
                autoComplete={'off'}
            />
        </div>
    );
};

export default SearchByNameForm;