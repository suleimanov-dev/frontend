import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {MEDIA_URL} from '@/config';

import classes from './Header.module.sass';

interface HeaderProps {
    resumeFile: string,
}

const Header: FC<HeaderProps> = (props) => {
    return (
        <header className={classes['header']}>
            <Link className={classes['nav-link']} to="/projects">Projects ---{'>'}</Link>
            {props.resumeFile ?
                <a
                    className={classes['download-btn-wrapper']}
                    href={MEDIA_URL + props.resumeFile}
                    download='Ramil_Suleimanov_resume.pdf'
                    target='_blank'
                >
                    <div className={classes['download-btn']}>
                        <div className={classes['download-btn-inner']}>Download resume</div>
                    </div>
                </a>
                :
                null
            }
        </header>
    );
};

export default Header;