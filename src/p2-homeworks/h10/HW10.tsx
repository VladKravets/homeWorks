import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {Loading} from "./Loading";
import s from "../h9/Clock.module.css";

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.value)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 5000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <div className={s.title}>Homework 10</div>

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><Loading/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
