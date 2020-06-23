import React from "react";
import s from './Skills.module.css';
import Skill from "./Skill/Skill";
import {faAngular, faCss3, faHtml5, faJs, faReact, faTelegram, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';


const Skills = (props) => {
    return (
        <div className={s.skills}>
            <div className={s.container}>

                <div className={s.skillsTitle}>
                    <h2>{props.title}</h2>
                    <div className={s.line}></div>
                </div>


                <div className={s.skillsWrapper}>
                    <Skill title='HTML' icon={faHtml5} size={'4x'}/>
                    <Skill title='CSS' icon={faCss3} size={'4x'}/>
                    <Skill title='JS' icon={faJs} size={'4x'}/>
                    <Skill title='React' icon={faReact} size={'4x'}/>
                    <Skill title='Angular' icon={faAngular} size={'4x'}/>

                </div>
            </div>
        </div>

    )
}
export default Skills;
