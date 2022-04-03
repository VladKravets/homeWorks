import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState({time: false, data: false})

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        setShow({...show, time: true})
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow({...show, data: true})
    }
    const onMouseLeave = () => {
        setShow({...show, data: false})
    }


    const stringTime:any = [date.getHours(), date.getMinutes(), date.getSeconds()] // fix with date
    const stringDate = date.toDateString() // fix with date

    if(stringTime[0] < 10){stringTime[0] = "0"+ stringTime[0];}
    if(stringTime[1] < 10){stringTime[1] = "0"+ stringTime[1];}
    if(stringTime[2] < 10){stringTime[2] = "0"+ stringTime[2];}
    const current_time = [stringTime[0],stringTime[1],stringTime[2]].join(':');

    return (
        <div className={s.clockContainer}>
            <span className={s.time} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {show.time && current_time}
            </span>

            {show && (
                <div className={s.data}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttonsBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
