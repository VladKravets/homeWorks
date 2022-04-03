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

    const stringTime = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':') // fix with date
    const stringDate = date.toDateString() // fix with date

    return (
        <div className={s.clockContainer}>
            <span className={s.time} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {show.time && stringTime}
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
