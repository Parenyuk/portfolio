import React from "react";
import s from './Slogan.module.css';


const Slogan = (props) => {
    return(
        <div className={s.slogan}>
            <div className={s.container}>
                {props.title}
            </div>
           </div>

    )
}
export default Slogan;