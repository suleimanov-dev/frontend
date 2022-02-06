import React, {FC} from 'react';

import {capitalize} from '@utils/helpers';

import './Description.sass';

interface DescriptionProps {
    articles: object[],
}

const Description: FC<DescriptionProps> = (props) => {
    return (
        <>
            {props.articles.length > 0 ?
                <div className='main--project__block project__description'>
                    {props.articles.map((article: any) => (
                        <div className='article' key={article['id']}>
                            <div className='title'>{capitalize(article['title'])}</div>
                            <div className='text' dangerouslySetInnerHTML={{__html: article['text']}}/>
                        </div>
                    ))}
                </div>
                :
                null
            }
        </>
    );
};

export default Description;