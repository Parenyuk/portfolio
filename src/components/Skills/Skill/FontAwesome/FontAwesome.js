import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

const FontAwesome = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon} size={props.size} />
        </div>
    )
}

export default FontAwesome;