import React, {FC, useEffect, useState} from 'react';

import {MEDIA_URL} from '@/config';
import MainInfoService from '@services/MainInfoService';

import './DownloadResumeButton.sass';

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
                    className='download-resume-btn'
                    href={MEDIA_URL + resumeFile}
                    download='Ramil_Suleimanov_resume.pdf'
                    target='_blank'
                >
                    <div className='download-resume-btn__content-wrapper'>
                        <div className='download-resume-btn__content'>
                            Download resume
                        </div>
                    </div>
                </a>
                :
                null
            }
        </>
    );
};

export default DownloadResumeButton;
