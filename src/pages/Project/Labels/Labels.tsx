import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';

import classes from './Labels.module.sass';

const orderLabelsByName = (arrayToSort: object[], key: string): object[] => {
    return arrayToSort.sort((f: any, s: any) => f[key]['name'] >= s[key]['name'] ? 1 : -1);
}

interface LabelsProps {
    technologies: object[],
    instruments: object[],
}

const Labels: FC<LabelsProps> = (props) => {
    return (
        <>
            {props.technologies.length > 0 && props.instruments.length > 0 ?
                <div className={classes['labels']}>
                    <div className={classes['technologies-block']}>
                        <div className={classes['title']}>Technologies</div>
                        <div className={classes['content']}>
                            {orderLabelsByName(props.technologies, 'technology').map((technology: any) => (
                                <div className={classes['label']} key={technology['id']}>
                                    <img
                                        className={classes['label__icon']}
                                        src={MEDIA_URL + technology['technology']['icon']}
                                        alt={technology['technology']['name']}
                                    />
                                    <div className={classes['label__name']}>{technology['technology']['name']}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes['instruments-block']}>
                        <div className={classes['title']}>Instruments</div>
                        <div className={classes['content']}>
                            {orderLabelsByName(props.instruments, 'instrument').map((instrument: any) => (
                                <div className={classes['label']} key={instrument['id']}>
                                    <img
                                        className={classes['label__icon']}
                                        src={MEDIA_URL + instrument['instrument']['icon']}
                                        alt={instrument['instrument']['name']}
                                    />
                                    <div className={classes['label__name']}>{instrument['instrument']['name']}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    );
};

export default Labels;
