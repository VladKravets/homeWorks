import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesСomp";
import s from './Header.module.css'

function Header() {
    return (

        <div className={s.navbar}>
            <div className={s.menu}>
                <NavLink to={PATH.PRE_JUNIOR}  className={({isActive}) => (isActive ? s.active : s.item)}>pre-Junior |</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => (isActive ? s.active : s.item)}>Junior |</NavLink>
                <NavLink to={PATH.JUN_PLUS} className={({isActive}) => (isActive ? s.active : s.item)}>Junior+</NavLink>
            </div>
            <div className={s.text}>hover me :)</div>
        </div>
    )
}

export default Header
