import React from "react";
import s from './Skill.module.css';
import FontAwesome from "./FontAwesome/FontAwesome";



const Skill = (props) => {
    return (
        <div className={s.skill}  >
            <div className={s.skillIcon}>
                <img src='' alt='' />
            <FontAwesome icon={props.icon} size={props.size} />
            </div>
            <div className={s.skillsTitle}>
                <h1>{props.title}</h1>
            </div>
            <div className={s.skillsDescription}>
                <h2>Подробное описание навыка</h2>
              </div>
        </div>
    )
}

export default Skill;