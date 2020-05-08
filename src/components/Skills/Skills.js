import React from "react";
import s from './Skills.module.css';
import Skill from "./Skill/Skill";
import {faAngular, faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';


const Skills = (props) => {
    return (
        <div className={s.skills}>
            <div className={s.container}>

                    <div className={s.skillsTitle}>
                        <h2>{props.title}</h2>
                        <div className={s.line}></div>
                    </div>


                <div className={s.skillsWrapper}>
                        <Skill title='HTML' icon={faHtml5} size={'6x'}    />
                        <Skill title='CSS' icon={faCss3} size={'6x'}    />
                        <Skill title='JS' icon={faJs} size={'6x'} />
                        <Skill title='React'  icon={faReact} size={'5x'} />
                        <Skill title='Redux'  icon={faAngular} size={'5x'} />
                </div>
            </div>
        </div>

    )
}
export default Skills;
