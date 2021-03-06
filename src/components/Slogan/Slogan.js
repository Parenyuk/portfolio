import React from "react";
import s from './Slogan.module.css';
import {Fade} from "react-reveal";


const Slogan = (props) => {
    return(
        <div className={s.slogan}>
            <Fade bottom>
            <div className={s.container}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.line}></div>
                <button className={s.btnShow} type='submit'>HIRE ME</button>
            </div>
            </Fade>
           </div>

    )
}
export default Slogan;
