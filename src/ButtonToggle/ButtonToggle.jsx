import React from 'react';
import ButtonToggleStyle from './Button.module.css'; 

const ButtonToggle = (props) => {

    return (
        <>
            <button className={ButtonToggleStyle.button}>{props.nameButton}</button>
            
        </>
    )
}

export default ButtonToggle;