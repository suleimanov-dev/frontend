import React, {useCallback, useEffect, useState, useRef, FC} from 'react';

import './multiRangeSlider.sass';

interface MultiRangeSliderProps {
    min: number,
    max: number,
    onChange: Function,
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = (props) => {
    const [minVal, setMinVal] = useState(props.min);
    const [maxVal, setMaxVal] = useState(props.max);
    const minValRef = useRef(props.min);
    const maxValRef = useRef(props.max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - props.min) / (props.max - props.min)) * 100),
        [props.min, props.max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            // @ts-ignore
            range.current.setAttribute('style', `left: ${minPercent}%`);
            // @ts-ignore
            range.current.setAttribute('style', `width: ${maxPercent - minPercent}%`);
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            // @ts-ignore
            range.current.setAttribute('style')`${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        props.onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, props.onChange]);

    return (
        <div className='container'>
            <input
                type='range'
                min={props.min}
                max={props.max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className='thumb thumb--left'
                // style={{ zIndex: minVal > props.max - 100 && '5' }}
            />
            <input
                type='range'
                min={props.min}
                max={props.max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className='thumb thumb--right'
            />

            <div className='slider'>
                <div className='slider__track' />
                <div ref={range} className='slider__range' />
                <div className='slider__left-value'>{minVal}</div>
                <div className='slider__right-value'>{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
