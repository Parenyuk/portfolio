import React from "react";
import s from './Slogan.module.css';


const Slogan = (props) => {
    return(
        <div className={s.slogan}>
            <div className={s.container}>
                <div className={s.title}>
                    {props.title}
                </div>

                <div className={s.line}></div>
                <div className={s.btnShow}><a href=''>HIRE ME</a>
                    </div>
            </div>
           </div>

    )
}
export default Slogan;