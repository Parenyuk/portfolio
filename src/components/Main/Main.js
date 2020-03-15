import React from "react";
import s from './Main.module.css'


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container} >
            <div className={s.greeting} >
                <span>Hello!</span>
                <span>My name is Victor Parenyuk</span>
                <span>I am frontend-developer</span>
            </div>
            <div className={s.photo}>
                <img src="" alt=""/>
            </div>
            </div>
        </div>
    )
}
export default Main;