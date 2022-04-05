import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://pngimg.com/uploads/snoopy/snoopy_PNG49.png',
    name: 'Иван Иванов',
    message: 'yarn start нажимала?',
    time: '22:00',
}
const alternativeMessageData={
    avatar: 'https://toppng.com/uploads/preview/snoopy-character-vector-free-download-11574040024zxjta6kkcz.png',
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
