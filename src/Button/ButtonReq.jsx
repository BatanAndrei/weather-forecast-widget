import React from "react";
import ButtonReqStyle from './Button.module.css';


const ButtonReq = (props) => {

    return (
        <>
            <button className={ButtonReqStyle.button}>{props.nameButton}</button>
        </>
    )
}

export default ButtonReq;