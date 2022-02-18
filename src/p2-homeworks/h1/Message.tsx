import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    message: string
    name: string
    time: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={`${s.content} ${s.left}`}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
