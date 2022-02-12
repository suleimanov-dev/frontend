import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';

import './Labels.sass';

const orderLabelsByName = (arrayToSort: object[], key: string): object[] => {
    return arrayToSort.sort((f: any, s: any) => f[key]['name'] >= s[key]['name'] ? 1 : -1);
}

interface LabelsProps {
    technologies: object[],
    instruments: object[],
}

const Labels: FC<LabelsProps> = (props) => {
    return (
        <div className='main--project__block project__label-blocks'>
            <div className='project__label-block project__label-block--left'>
                {props.technologies.length > 0 ?
                    <>
                        <div className='project-label-block__title'>Technologies</div>
                        <div className='project-label-block__content'>
                            {orderLabelsByName(props.technologies, 'technology').map((technology: any) => (
                                <div className='project-label-block__element' key={technology['id']}>
                                    <img
                                        className='project-label-block-element__icon skeleton'
                                        // @ts-ignore
                                        onLoad={e => e.target.classList.remove('skeleton')}
                                        src={MEDIA_URL + technology['technology']['icon']}
                                        alt={technology['technology']['name']}
                                    />
                                    <div className='project-label-block-element__name'>
                                        {technology['technology']['name']}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <div className='project-label-block__title'>
                            <div className='skeleton skeleton-text' style={{width: '200px'}}/>
                        </div>
                        <div className='project-label-block__content'>
                            {[...Array(5).keys()].map((index: number) => (
                                <div className='project-label-block__element' key={index}>
                                    <div className='project-label-block-element__icon skeleton'/>
                                    <div className='project-label-block-element__name'>
                                        <div
                                            className='skeleton skeleton-text'
                                            style={{width: '100px'}}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
            <div className='project__label-block project__label-block--right'>
                {props.instruments.length > 0 ?
                    <>
                        <div className='project-label-block__title'>Instruments</div>
                        <div className='project-label-block__content'>
                            {orderLabelsByName(props.instruments, 'instrument').map((instrument: any) => (
                                <div className='project-label-block__element' key={instrument['id']}>
                                    <img
                                        className='project-label-block-element__icon skeleton'
                                        // @ts-ignore
                                        onLoad={e => e.target.classList.remove('skeleton')}
                                        src={MEDIA_URL + instrument['instrument']['icon']}
                                        alt={instrument['instrument']['name']}
                                    />
                                    <div className='project-label-block-element__name'>
                                        {instrument['instrument']['name']}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <div className='project-label-block__title'>
                            <div className='skeleton skeleton-text' style={{width: '200px'}}/>
                        </div>
                        <div className='project-label-block__content'>
                            {[...Array(3).keys()].map((index: number) => (
                                <div className='project-label-block__element' key={index}>
                                    <div className='project-label-block-element__icon skeleton'/>
                                    <div className='project-label-block-element__name'>
                                        <div
                                        className='skeleton skeleton-text'
                                        style={{width: '100px'}}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Labels;
