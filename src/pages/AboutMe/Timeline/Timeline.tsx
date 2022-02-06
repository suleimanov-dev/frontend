import React, {FC, useEffect, useState} from 'react';

import {getYear} from '@utils/helpers';
import TimelineService from '@services/TimelineService';

import './Timeline.sass';

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
        <div className='main--about-me__block timeline'>
            {timeline.map((timelineBlock: any) => (
                <div className='timeline__element' key={timelineBlock['id']}>
                    <div className='timeline-element__dot'>&bull;</div>
                    <div className='timeline-element__content'>
                        <div className='timeline-element__period'>
                            {getYear(timelineBlock['start_year'])}
                            &ndash;
                            {timelineBlock['end_year'] ? getYear(timelineBlock['end_year']) : 'present'}
                        </div>
                        <div
                            className='timeline-element__text'
                            dangerouslySetInnerHTML={{__html: timelineBlock['content']}}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
