import React, {FC} from 'react';
import 'external-svg-loader';
import ReactPlayer from 'react-player';

import {MEDIA_URL} from '@/config';

import './Overview.sass';

interface OverviewVideoProps {
    video: string,
    preview: string,
    isLoading: boolean,
}

const Overview: FC<OverviewVideoProps> = (props) => {
    return (
        <>
            {!props.isLoading ?
                props.video !== '' ?
                    <ReactPlayer
                        className='main--project__block project__overview-video'
                        url={MEDIA_URL + props.video}
                        controls={true}
                        // light={`${MEDIA_URL}/${projectInfo['overview_video_preview']}`}
                        // playIcon={<FontAwesomeIcon icon={faPlay}/>}
                    />
                    :
                    null
                :
                <div
                    className='main--project__block project__overview-video skeleton'
                    style={{width: '100%', paddingBottom: '56%', borderRadius: '10px'}}
                />
            }
        </>
    );
};

export default Overview;
