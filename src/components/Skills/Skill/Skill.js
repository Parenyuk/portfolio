import React from "react";
import s from './Skill.module.css';
import FontAwesome from "./FontAwesome/FontAwesome";


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillIcon}>
                <FontAwesome icon={props.icon} size={props.size} />
            </div>
            <div className={s.skillTitle}>
                <h3>{props.title}</h3>
            </div>
            <div className={s.skillDescription}>
                <p>Подробное описание навыка</p>
            </div>
        </div>
    )
}

export default Skill;