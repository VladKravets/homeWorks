import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesСomp";
import s from './Header.module.css'

function Header() {
    return (

        <div className={s.navbar}>
            <div className={s.icon}>→</div>
            <div className={s.menu}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.item}>pre-Junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.item}>Junior</NavLink>
                <NavLink to={PATH.JUN_PLUS} className={s.item}>Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
