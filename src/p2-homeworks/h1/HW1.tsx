import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png',
    name: 'Иван Иванов',
    message: 'yarn start нажимала?',
    time: '22:00',
}
const alternativeMessageData={
    avatar: 'https://w7.pngwing.com/pngs/105/826/png-transparent-avatar-computer-icons-user-profile-social-avatar-heroes-author-black.png',
    name: 'Света Петровна',
    message: 'Да,но ничего не происходит =(',
    time: '22:04',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                message={alternativeMessageData.message}
                name={alternativeMessageData.name}
                time={alternativeMessageData.time}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
