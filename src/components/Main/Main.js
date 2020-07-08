import React from "react";
import s from './Main.module.css';
import mainPhoto from './../../assets/img/mainPhoto/mainPhoto.jpg'


const Main = () => {
    return (
        <div id={'main'} className={s.main}>
            <div className={s.container} >
            <div className={s.greeting} >
                <span>Hello!</span>
                <span>I am  <span>Victor Parenyuk</span> </span>
                <h1>A Front-end Developer</h1>
            </div>
            <div className={s.photo}>
                <div className={s.image}><img src={mainPhoto} className={s.mainPhoto} /> </div>
            </div>
            </div>
        </div>
    )
}
export default Main;