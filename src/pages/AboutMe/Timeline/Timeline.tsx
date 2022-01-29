import React, {FC, useEffect, useState} from 'react';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import TimelineService from '@services/TimelineService';
import {MEDIA_URL} from '@/config';

import classes from './Timeline.module.sass';

const getYear = (text: string): number => {
    return new Date(text).getFullYear();
}

const processBlockClick = (e: any, id: number) => {
    if (!['A', 'IMG'].includes(e.target.tagName)) {
        const block = document.querySelector(`.${classes['timeline-block']}[data-id="${id}"]`);

        if (block) {
            const attachments = block.querySelector(`.${classes['attachments']}`);

            if (attachments) {
                const isAttachmentsHidden = block.getAttribute('data-attachment-hidden') == 'true';

                isAttachmentsHidden ?
                    attachments.setAttribute(
                        'style',
                        `height: ${attachments.scrollHeight}px; margin-bottom: 7px !important`
                    )
                    :
                    attachments.setAttribute(
                        'style',
                        'height: 0; margin-bottom: 0 !important'
                    )

                block.setAttribute('data-attachment-hidden', (!isAttachmentsHidden).toString());
            }
        }
    }
}

const Timeline: FC = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetchTimeline().then();
    }, []);

    async function fetchTimeline() {
        const timeline = await TimelineService.get();
        setTimeline(timeline);
    }

    return (
        <div className={classes['timeline']}>
            {timeline.map((timelineBlock: any) => (
                <div
                    className={classes['timeline-block']}
                    onClick={(e) => processBlockClick(e, timelineBlock['id'])}
                    data-id={timelineBlock['id']}
                    data-attachment-hidden={timelineBlock['attachments'].length > 0 ? true : null}
                    key={timelineBlock['id']}
                >
                    <div className={classes['timeline-block__left']}>&bull;</div>
                    <div className={classes['timeline-block__right']}>
                        <div className={classes['years']}>
                            {getYear(timelineBlock['start_year'])}
                            &ndash;
                            {timelineBlock['end_year'] ? getYear(timelineBlock['end_year']) : 'present'}
                        </div>
                        <div className={classes['text']} dangerouslySetInnerHTML={{__html: timelineBlock['content']}}/>
                        {timelineBlock['attachments'].length > 0 ? (
                            <>
                                <div className={classes['attachments']}>
                                    {timelineBlock['attachments'].map((attachment: any) => (
                                        <img
                                            className={classes['attachment']}
                                            src={`${MEDIA_URL}/${attachment['attachment']}`}
                                            alt="Attachment"
                                        />
                                    ))}
                                </div>
                                <div className={classes['hint']}>
                                    <FontAwesomeIcon className={classes['hint__icon']} icon={faChevronDown} />
                                    click on card to show attachments
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;