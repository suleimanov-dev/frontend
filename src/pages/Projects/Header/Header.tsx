import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import classes from './Header.module.sass';

const Header: FC = () => {
    return (
        <header className={classes['header']}>
            <Link className={classes['nav-link']} to="/">{'<'}--- About me</Link>
        </header>
    );
};

export default Header;