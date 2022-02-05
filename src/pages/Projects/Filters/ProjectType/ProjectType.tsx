import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import {capitalize} from '@utils/helpers';

import classes from './ProjectType.module.sass';

interface ProjectTypeProps {
    involvementTypes: string[],
    designationTypes: string[],
}

const ProjectType: FC<ProjectTypeProps> = (props) => {
    return (
        <div className={classes['project-type']}>
            <div className={classes['project-type__title']}>Project type</div>
            <div className={classes['project-type__content']}>
                <div className={classes['project-subtype']}>
                    <div className={classes['project-subtype__title']}>Involvement</div>
                    <ul className={classes['project-subtype__content']}>
                        {props.involvementTypes.map((type: string) => (
                            <li className={classes['project-subtype__element-wrapper']} key={type}>
                                <label className={classes['project-subtype__element']} htmlFor={type}>
                                    <input type='checkbox' id={type} name={type} value={type} />
                                    <div className={classes['checkmark']}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={classes['label']}>{capitalize(type)}</div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes['project-subtype']}>
                    <div className={classes['project-subtype__title']}>Designation</div>
                    <ul className={classes['project-subtype__content']}>
                        {props.designationTypes.map((type: string) => (
                            <li className={classes['project-subtype__element-wrapper']} key={type}>
                                <label className={classes['project-subtype__element']} htmlFor={type}>
                                    <input type='checkbox' id={type} name={type} value={type} />
                                    <div className={classes['checkmark']}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={classes['label']}>{capitalize(type)}</div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectType;