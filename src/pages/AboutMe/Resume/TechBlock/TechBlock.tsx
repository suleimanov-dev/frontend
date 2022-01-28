import React, {FC} from 'react';

import classes from './TechBlock.module.sass';

const techBlockExtraText: any = {
    'BACKEND': ' for back-end',
    'DB': ' as DB',
    'FRONTEND': ' for front-end',
    'DESIGN': ' to design prototypes',
    'OTHER': '',
};

const createHighlight = (): HTMLSpanElement => {
    let span = document.createElement('span');
    span.className = classes['highlight'];
    return span;
}

const processTechBlockText = (text: string): string => {
    let techBlockText = document.createElement('span');
    let span = createHighlight();

    [...text].forEach(letter => {
        if ((/[a-zA-Z]/).test(letter)) {
            span.innerHTML += letter;
        } else {
            span.innerHTML.length > 0 ? techBlockText.appendChild(span) : null;
            techBlockText.innerHTML += letter;
            span = createHighlight();
        }
    })

    span.innerHTML.length > 0 ? techBlockText.appendChild(span) : null;
    return techBlockText.innerHTML;
};

interface ResumeTechBlockProps {
    technologyBlocks: object[]
}

const TechBlock: FC<ResumeTechBlockProps> = (props) => {
    return (
        <div className={classes['resume__tech-blocks']}>
            {props.technologyBlocks.map((techBlock: any) => (
                <div className={classes['tech-block']}
                     dangerouslySetInnerHTML={{
                         __html: `&bull;&nbsp;${
                             processTechBlockText(techBlock.content) + techBlockExtraText[techBlock.type]
                         };`
                     }}
                     key={techBlock.id}
                />
            ))}
        </div>
    );
};

export default TechBlock;