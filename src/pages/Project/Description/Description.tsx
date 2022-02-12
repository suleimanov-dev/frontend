import React, {FC} from 'react';

import {capitalize} from '@utils/helpers';

import './Description.sass';

interface DescriptionProps {
    articles: object[]
}

const Description: FC<DescriptionProps> = (props) => {
    return (
        <div className='main--project__block project__description'>
            {props.articles.length > 0 ?
                props.articles.map((article: any) => (
                    <div className='article' key={article['id']}>
                        <div className='title'>{capitalize(article['title'])}</div>
                        <div className='text' dangerouslySetInnerHTML={{__html: article['text']}}/>
                    </div>
                ))
                :
                [...Array(3).keys()].map((index: number) => (
                    <div className='article' key={index}>
                        <div className='title'>
                            <div className='skeleton skeleton-text' style={{width: '200px'}}/>
                        </div>
                        <div className='text'>
                            <div className='skeleton skeleton-text'/>
                            <div className='skeleton skeleton-text'/>
                            <div className='skeleton skeleton-text'/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Description;