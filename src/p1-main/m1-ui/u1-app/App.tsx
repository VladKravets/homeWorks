import React from 'react'
import s from './App.module.css'
import PreJunior from "../../../p2-homeworks/h5/pages/PreJunior";
import Junior from "../../../p2-homeworks/h5/pages/Junior";
import JuniorPlus from "../../../p2-homeworks/h5/pages/Junior+";

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <PreJunior/>
            {/*<Junior/>
            <JuniorPlus/>*/}
        </div>
    )
}

export default App
