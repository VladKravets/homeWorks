import React from 'react';
import Slider from '@material-ui/core/Slider';
import s from './DoubleRange.module.css'


// тип пропсов обычного инпута


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: [number, number]
    onChangeRangeO?: (value: number) => void
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: React.ChangeEvent<{}>,
                          value: (number | number[])) => {
        onChangeRange
        && onChangeRange(value as number)
    };
    return (
        <div className={s.doubleRange}>
            <Slider
                style={{
                    color: '#f50000',
                    width: 400
                }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

export default SuperDoubleRange;