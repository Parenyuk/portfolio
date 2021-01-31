import React from "react";
import s from './Project.module.css';


const Project = (props) => {

    return (
        <div id={'projects'} className={s.project} >
            <div className={s.projectImg} alt='' style={props.style} >
                <a className={s.btnShow} href={props.link} target="_blank" >Show</a>
            </div>
            <div>
                <span className={s.projectTitle} >{props.title}</span>
                <div className={s.projectBlock}>
                    <span className={s.projectDescription}>{props.description}</span>
                </div>

            </div>
        </div>

    )
}
export default Project;
