import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';

import './ContactLinks.sass';

interface ResumeContactLinksProps {
    contactLinks: object[],
}

const ContactLinks: FC<ResumeContactLinksProps> = (props) => {
    return (
        <div className='about__contacts'>
            {props.contactLinks.length > 0 ?
                props.contactLinks.map((contact: any) => (
                    <a
                        className='contacts__contact'
                        href={contact['link']}
                        title={contact['name']}
                        target="_blank"
                        key={contact['id']}
                    >
                        <svg className='contact__icon' data-src={MEDIA_URL + contact['icon']}/>
                    </a>
                ))
                :
                [...Array(5).keys()].map((index: number) => (
                    <div className='contacts__contact skeleton' key={index} style={{border: 'none'}}/>
                ))
            }
        </div>
    );
};

export default ContactLinks;
