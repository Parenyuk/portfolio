import React from "react";
import s from './Skill.module.css';
import typesctipt from './../../../assets/img/roundIcon/typescript.svg'


const SkillTypescript = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillIcon}>
              <img src={typesctipt} className={s.Icon} />
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

export default SkillTypescript;