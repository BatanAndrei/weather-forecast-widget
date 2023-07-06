import React from 'react';
import toggleStyle from './Button.module.css'; 
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const ButtonToggle = (props) => {
    const [state, setState] = useState(true);
    const remove = useRef();

    function switchWeather(e) {
        if(e.target == remove.current){
            setState(false);   
        }else if(e.target !== remove.current && e.target.tagName == 'BUTTON'){
            setState(true);
        }
    }

    useEffect(() => {
        window.addEventListener("click", switchWeather)
        return () => {
        window.removeEventListener("click", switchWeather)
        }
      }, [])
    return (
        <>
            <button ref={remove} className={state ? toggleStyle.buttonToggle : toggleStyle.active}>{props.nameButton}</button>
        </>
    )
}

export default ButtonToggle;