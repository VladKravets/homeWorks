import React from 'react'
import s from './AlternativeMessage.module.css'

type AlternativeMessage = {
    avatar: string
    message: string
    name: string
    time: string
}

const AlternativeMessage: React.FC<AlternativeMessage> = (props) => {
    return (
        <div className={s.AltMessage}>
            <img src={props.avatar} className={s.AltAvatar}/>
            <div className={`${s.AlterContent} ${s.right}`}>
                <div className={s.AlterName}>{props.name}</div>
                <div className={s.AlterText}>{props.message}</div>
                <div className={s.AlterTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
