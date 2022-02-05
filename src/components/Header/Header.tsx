import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import DownloadResumeButton from '@components/DownloadResumeButton/DownloadResumeButton';

import classes from './Header.module.sass';

const Header = () => {
    const location = useLocation();

    return (
        <header className={classes['header']}>
            <nav className={classes['nav']}>
                {!new RegExp('/portfolio/.*/').test(location.pathname) ?
                    <>
                        <Link
                            className={location.pathname === '/' ? classes['nav__link--current'] : classes['nav__link']}
                            to="/"
                        >
                            ~About
                        </Link>
                        <Link
                            className={location.pathname === '/portfolio' ? classes['nav__link--current'] : classes['nav__link']}
                            to="/portfolio"
                        >
                            ~Portfolio
                        </Link>
                    </>
                    :
                    <Link className={classes['nav__link']} to="/portfolio">~Back</Link>
                }
            </nav>
            <div>
                {location.pathname === '/' ? <DownloadResumeButton/> : null}
            </div>
        </header>
    );
};

export default Header;
