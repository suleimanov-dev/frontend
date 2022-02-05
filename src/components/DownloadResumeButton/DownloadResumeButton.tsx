import React, {FC, useEffect, useState} from 'react';

import {MEDIA_URL} from '@/config';
import classes from './DownloadResumeButton.module.sass';
import MainInfoService from '@services/MainInfoService';

const DownloadResumeButton: FC = () => {
    const [resumeFile, setResumeFile] = useState('');

    useEffect(() => {
        fetchResumeFile().then();
    }, []);

    async function fetchResumeFile() {
        const mainInfo = await MainInfoService.get();
        setResumeFile(mainInfo['resume_file']);
    }

    return (
        <>
            {resumeFile ?
                <a
                    className={classes['download-btn-wrapper']}
                    href={MEDIA_URL + resumeFile}
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
        </>
    );
};

export default DownloadResumeButton;