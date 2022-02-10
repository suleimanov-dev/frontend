import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import DownloadResumeButton from '@components/DownloadResumeButton/DownloadResumeButton';

import './Header.sass';

const Header = () => {
    const location = useLocation();

    return (
        <header className='header'>
            <nav className='header__nav'>
                {!new RegExp('/portfolio/.*').test(location.pathname) ? <>
                    <Link
                        className={'nav__link' + (location.pathname === '/' ? ' nav__link--current' : '')}
                        to='/'
                    >~About</Link>
                    <Link
                        className={'nav__link' + (location.pathname === '/portfolio' ? ' nav__link--current' : '')}
                        to='/portfolio'
                    >~Portfolio</Link>
                </> : <Link className='nav__link' to='/portfolio'>~Back</Link>}
            </nav>
            <div className='header__extra'>
                {location.pathname === '/' ? <DownloadResumeButton extraClass='download-resume-btn--header'/> : null}
            </div>
        </header>
    );
};

export default Header;
