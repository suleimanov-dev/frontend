import React, {FC} from 'react';

import './Labels.sass';

interface LabelsProps {
    technologies: object[],
    instruments: object[],
}

const Labels: FC<LabelsProps> = (props) => {
    return (
        <div className='projects-element__label-blocks'>
            <div className='projects-element__label-block'>
                <div className='projects-element-label-block__title'>Technologies:</div>
                {props.technologies.map((technology: any) => (
                    <div className='projects-element-label-block__element' key={technology['id']}>
                        {technology['name']}
                    </div>
                ))}
            </div>
            <div className='projects-element__label-block'>
                <div className='projects-element-label-block__title'>Instruments:</div>
                {props.instruments.map((instrument: any) => (
                    <div className='projects-element-label-block__element' key={instrument['id']}>
                        {instrument['name']}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Labels;
