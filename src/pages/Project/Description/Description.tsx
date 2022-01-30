import React, {FC} from 'react';

import {capitalize} from '@utils/helpers';

import classes from './Description.module.sass';

interface DescriptionProps {
    articles: object[],
}

const Description: FC<DescriptionProps> = (props) => {
    return (
        <>
            {props.articles.length > 0 ?
                <div className={classes['description']}>
                    {props.articles.map((article: any) => (
                        <div className={classes['article']} key={article['id']}>
                            <div className={classes['title']}>{capitalize(article['title'])}</div>
                            <div className={classes['text']} dangerouslySetInnerHTML={{__html: article['text']}}/>
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