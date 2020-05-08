import React from "react";
import s from './Project.module.css';


const Project = (props) => {
    return(
       <div className={s.project}  >
           <div className={s.projectImg}>
               <a className={s.btnShow} href=''>Show</a>
           </div>
           <span className={s.projectTitle}>{props.title}</span>
           <span className={s.projectDescription}>{props.description}</span>
       </div>

    )
}
export default Project;