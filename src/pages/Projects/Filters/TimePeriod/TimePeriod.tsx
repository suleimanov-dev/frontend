import React, {FC} from 'react';

import classes from './TimePeriod.module.sass';

interface TimePeriodProps {
    timePeriod: {from: string, to: string},
}

const TimePeriod: FC<TimePeriodProps> = (props) => {
    return (
        <div className={classes['time-period']}>
            <div className={classes['time-period__title']}>Time period</div>
            <div className={classes['time-period__content']}>
                {/*<MultiRangeSlider*/}
                {/*    min={new Date(props.timePeriod['from']).getTime()}*/}
                {/*    max={new Date(props.timePeriod['to']).getTime()}*/}
                {/*    onChange={(data: any) => console.log(`min = ${data.min}, max = ${data.max}`)}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default TimePeriod;