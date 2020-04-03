import React from "react";
import s from './Skills.module.css';
import Skil from "./Skil/Skil";


const Skills = () => {
    return(
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.skilsTitle}>
                    <h2>  Мои скиллы</h2>
                </div >
            <div className={s.skilItem}>
                <Skil/>
                <Skil/>
                <Skil/>
            </div>
            </div>
        </div>

            )
            }
export default Skills;
