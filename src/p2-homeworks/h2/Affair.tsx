import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback:(id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair.id)}// need to fix

    return (
        <div className={s.affairs}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={`${s.item}${s.priority}`}>{props.affair.priority}</div>

            <button className={s.deleteButton} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
