import React, {FC} from 'react';

import classes from '@pages/Projects/Projects/Labels/Labels.module.sass';

interface LabelsProps {
    technologies: object[],
    instruments: object[],
}

const Labels: FC<LabelsProps> = (props) => {
    return (
        <div className={classes['labels']}>
            <div className={classes['technologies']}>
                <div className={classes['title']}>Technologies:</div>
                <div className={classes['content']}>
                    {props.technologies.map((technology: any) => (
                        <div className={classes['label']} key={technology['id']}>
                            {technology['name']}
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes['instruments']}>
                <div className={classes['title']}>Instruments:</div>
                <div className={classes['content']}>
                    {props.instruments.map((instrument: any) => (
                        <div className={classes['label']} key={instrument['id']}>
                            {instrument['name']}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Labels;
