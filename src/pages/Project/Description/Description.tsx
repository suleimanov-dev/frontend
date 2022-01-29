import React, {FC} from 'react';

import classes from './Description.module.sass';

const capitalize = (text: string): string => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : '';
};

interface DescriptionProps {
    articles: object[],
}

const Description: FC<DescriptionProps> = (props) => {
    return (
        <div className={classes['description']}>
            {props.articles.map((article: any) => (
                <div className={classes['article']} key={article['id']}>
                    <div className={classes['title']}>{capitalize(article['title'])}</div>
                    <div className={classes['text']} dangerouslySetInnerHTML={{__html: article['text']}} />
                </div>
            ))}
        </div>
    );
};

export default Description;