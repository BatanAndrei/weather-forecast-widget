import React from "react";
import ButtonStyle from './Button.module.css';


const ButtonReq = (props) => {

    return (
        <>
            <button className={ButtonStyle.button}>{props.nameButton}</button>
        </>
    )
}

export default ButtonReq;