import React, {FC} from 'react';
import 'external-svg-loader';

import {MEDIA_URL} from '@/config';

import classes from './Overview.module.sass';
import ReactPlayer from 'react-player';

interface OverviewVideoProps {
    video: string,
    preview: string,
}

const Overview: FC<OverviewVideoProps> = (props) => {
    return (
        <>
            {props.video !== '' ?
                <ReactPlayer
                    className={classes['overview-video']}
                    url={`${MEDIA_URL}/${props.video}`}
                    controls={true}
                    // light={`${MEDIA_URL}/${projectInfo['overview_video_preview']}`}
                    // playIcon={<FontAwesomeIcon icon={faPlay}/>}
                />
                :
                null
            }
        </>
    );
};

export default Overview;
