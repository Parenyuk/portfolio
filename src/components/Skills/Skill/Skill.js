import React from "react";
import s from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillIcon}>
                <img src='' alt='' />
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