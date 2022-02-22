import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import alternativeSuperButton from "../h4/common/c2-SuperButton/AlternativeSuperButton";

type GreetingPropsType = {
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, onKeyPressHandler, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input

    return (
        <div className={s.allProperty}>
            <div className={s.inputForm}>
                <input value={name}
                       placeholder={'write here'}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={onKeyPressHandler}
                />
                <button
                    onClick={addUser}
                    className={s.button}
                    disabled={!name}>add
                </button>
                <span className={s.count}>{totalUsers}</span>
                <div className={s.error}>{error}</div>
            </div>
        </div>
    )
}

export default Greeting
