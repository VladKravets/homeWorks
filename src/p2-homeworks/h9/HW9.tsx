import React from 'react'
import Clock from './Clock'
import s from "../h9/Clock.module.css";

function HW9() {
    return (
        <div>
            <hr/>
            <div className={s.title}>Homework 9</div>

            {/*should work (должно работать)*/}
            <div className="container">
                <Clock/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
