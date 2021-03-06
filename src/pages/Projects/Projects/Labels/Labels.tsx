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
                {props.technologies.length > 0 ?
                    <>
                        <span className='projects-element-label-block__title'>Technologies:</span>
                        {props.technologies.map((technology: any) => (
                            <div className='projects-element-label-block__element' key={technology['id']}>
                                {technology['name']}
                            </div>
                        ))}
                    </>
                    :
                    <div className='skeleton skeleton-text' style={{width: '60%'}}/>
                }
            </div>
            <div className='projects-element__label-block'>
                {props.instruments.length > 0 ?
                    <>
                        <span className='projects-element-label-block__title'>Instruments:</span>
                        {props.instruments.map((instrument: any) => (
                            <div className='projects-element-label-block__element' key={instrument['id']}>
                                {instrument['name']}
                            </div>
                        ))}
                    </>
                    :
                    <div className='skeleton skeleton-text' style={{width: '70%'}}/>
                }
            </div>
        </div>
    );
};

export default Labels;
