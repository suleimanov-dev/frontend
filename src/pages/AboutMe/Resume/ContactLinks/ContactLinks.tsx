import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';

import classes from './ContactLinks.module.sass';

interface ResumeContactLinksProps {
    contactLinks: object[]
}

const ContactLinks: FC<ResumeContactLinksProps> = (props) => {
    return (
        <div className={classes['resume__contact-links']}>
            {props.contactLinks.map((link: any) => (
                <a
                    className={classes['contact-link']}
                    href={link['link']}
                    title={link['name']}
                    target="_blank"
                    key={link['id']}
                >
                    <svg className={classes['contact-link__icon']} data-src={MEDIA_URL + link['icon']} />
                </a>
            ))}
        </div>
    );
};

export default ContactLinks;