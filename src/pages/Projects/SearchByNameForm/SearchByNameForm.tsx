import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import './SearchByNameForm.sass';

interface SearchByNameFormProps {
    onSearchQueryChange: Function,
}

const SearchByNameForm: FC<SearchByNameFormProps> = (props) => {
    return (
        <div className='search-project-by-name'>
            <input
                id='search-by-name'
                type='text'
                name='search-by-name'
                placeholder='Project name'
                onChange={(e) => props.onSearchQueryChange(e.target.value)}
                autoComplete={'off'}
            />
            <label htmlFor='search-by-name'><FontAwesomeIcon icon={faSearch}/></label>
        </div>
    );
};

export default SearchByNameForm;
