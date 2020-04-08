import React from "react";
import s from './Main.module.css'


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container} >
            <div className={s.greeting} >
                <span>Hello!</span>
                <span>I am Victor Parenyuk</span>
                <h1>A Front-end Developer</h1>
            </div>
            <div className={s.photo}>
                <img src="" alt=""/>
            </div>
            </div>
        </div>
    )
}
export default Main;