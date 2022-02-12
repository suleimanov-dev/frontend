import React, {FC} from 'react';

import './TechBlock.sass';

interface ResumeTechBlockProps {
    technologyBlocks: object[]
}

const TechBlock: FC<ResumeTechBlockProps> = (props) => {
    const techBlockExtraText: any = {
        'BACKEND': ' for back-end',
        'DB': ' as DB',
        'FRONTEND': ' for front-end',
        'DESIGN': ' to design prototypes',
        'OTHER': '',
    };

    const createHighlight = (): HTMLSpanElement => {
        let span = document.createElement('span');
        span.className = 'highlight';
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

    return (
        <div className='about__technologies'>
            {props.technologyBlocks.length > 0 ?
                props.technologyBlocks.map((techBlock: any) => (
                    <div
                        className='technologies__row'
                        dangerouslySetInnerHTML={{__html: `&bull;&nbsp;${
                                processTechBlockText(techBlock['content']) + techBlockExtraText[techBlock['type']]
                            };`}}
                        key={techBlock['id']}
                    />
                ))
                :
                [...Array(5).keys()].map((index: number) => (
                    <div className='technologies__row' key={index}>
                        <div className='skeleton skeleton-text'/>
                    </div>
                ))
            }
        </div>
    );
};

export default TechBlock;