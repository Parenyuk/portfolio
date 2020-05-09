import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './FontAwesome.module.css'

const FontAwesome = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon} size={props.size} className={s.icon} />
        </div>
    )
}

export default FontAwesome;