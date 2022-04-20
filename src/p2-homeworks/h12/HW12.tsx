import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setThemeAC} from "./bll/themeReducer";

const themes = ['light', 'dark-gradient', 'gray-animated'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => dispatch(setThemeAC(theme))

    return (
        <div className={s.wrapper}>
            <div className={`${s[theme]} ${s.box}`}>
                <div className={s.title}>Homeworks 12</div>
                <span className={`s[theme + '-text']`}></span>


                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeCallback}
                    value={theme}
                />
            </div>
        </div>
    );
}

export default HW12;
