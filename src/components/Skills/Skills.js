import React from "react";
import s from './Skills.module.css';
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.skillsTitle}>
                    <h2> Мои скиллы</h2>
                </div>
                <div className={s.skillsWrapper}>
                        <Skill title='HTML&CSS'/>
                        <Skill title='JS'/>
                        <Skill title='React'/>
                </div>
            </div>
        </div>

    )
}
export default Skills;
