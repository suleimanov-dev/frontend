import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import {capitalize} from '@utils/helpers';

import classes from './TechStack.module.sass';

interface TechStackProps {
    technologies: object[],
}

const TechStack: FC<TechStackProps> = (props) => {
    return (
        <div className={classes['tech-stack']}>
            <div className={classes['tech-stack__title']}>Tech stack</div>
            <div className={classes['tech-stack__content']}>
                <input
                    className={classes['search-by-technology']}
                    type='text'
                    name='search-technology'
                    placeholder='Search'
                />
                <ul className={classes['technologies']}>
                    {props.technologies.map((technology: any) => (
                        <li className={classes['technologies__element-wrapper']} key={technology['id']}>
                            <label className={classes['technologies__element']} htmlFor={technology['name']}>
                                <input
                                    type='checkbox'
                                    id={technology['name']}
                                    name={technology['name']}
                                    value={technology['name']}
                                />
                                <div className={classes['checkmark']}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className={classes['label']}>{capitalize(technology['name'])}</div>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechStack;