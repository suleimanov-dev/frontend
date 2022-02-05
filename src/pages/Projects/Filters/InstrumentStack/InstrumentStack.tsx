import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import {capitalize} from '@utils/helpers';

import classes from './InstrumentStack.module.sass';

interface InstrumentStackProps {
    instruments: object[],
}

const InstrumentStack: FC<InstrumentStackProps> = (props) => {
    return (
        <div className={classes['instrument-stack']}>
            <div className={classes['instrument-stack__title']}>Instrument stack</div>
            <div className={classes['instrument-stack__content']}>
                <input
                    className={classes['search-by-instrument']}
                    type='text'
                    name='search-technology'
                    placeholder='Search'
                />
                <ul className={classes['instruments']}>
                    {props.instruments.map((instrument: any) => (
                        <li className={classes['instruments__element-wrapper']} key={instrument['id']}>
                            <label className={classes['instruments__element']} htmlFor={instrument['name']}>
                                <input
                                    type='checkbox'
                                    id={instrument['name']}
                                    name={instrument['name']}
                                    value={instrument['name']}
                                />
                                <div className={classes['checkmark']}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className={classes['label']}>{capitalize(instrument['name'])}</div>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InstrumentStack;