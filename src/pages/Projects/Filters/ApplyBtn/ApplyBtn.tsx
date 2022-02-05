import React from 'react';

import classes from './ApplyBtn.module.sass';

const ApplyBtn = () => {
    return (
        <button className={classes['apply-btn-wrapper']}>
            <div className={classes['apply-btn']}>
                <div className={classes['apply-btn-inner']}>Apply</div>
            </div>
        </button>
    );
};

export default ApplyBtn;