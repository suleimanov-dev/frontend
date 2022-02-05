import React, {FC, useEffect, useState} from 'react';

import {getYear} from '@utils/helpers';
import TimelineService from '@services/TimelineService';

import classes from './Timeline.module.sass';

const Timeline: FC = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetchTimeline().then();
    }, []);

    async function fetchTimeline() {
        const timeline = await TimelineService.list();
        setTimeline(timeline);
    }

    return (
        <div className={classes['timeline']}>
            {timeline.map((timelineBlock: any) => (
                <div className={classes['timeline-block']} key={timelineBlock['id']}>
                    <div className={classes['timeline-block__left']}>&bull;</div>
                    <div className={classes['timeline-block__right']}>
                        <div className={classes['years']}>
                            {getYear(timelineBlock['start_year'])}
                            &ndash;
                            {timelineBlock['end_year'] ? getYear(timelineBlock['end_year']) : 'present'}
                        </div>
                        <div className={classes['text']} dangerouslySetInnerHTML={{__html: timelineBlock['content']}}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;