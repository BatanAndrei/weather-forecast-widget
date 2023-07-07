import React from 'react';
import toggleStyle from './Button.module.css'; 
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const ButtonWeekDay = (props) => {
    const [state, setState] = useState(true);
    const ref = useRef();

    function toggleWeather(e) {
        if(e.target === ref.current){
            setState(false);   
        }else if(e.target !== ref.current && e.target.tagName === 'SPAN'){
            setState(true);
        }
    }

    useEffect(() => {
        window.addEventListener("click", toggleWeather)
        return () => {
        window.removeEventListener("click", toggleWeather)
        }
      }, [])
    return (
        <>
            <button className={state ? toggleStyle.buttonPassive : toggleStyle.buttonActive}><span ref={ref} className={toggleStyle.targetClick}>{props.nameButton}</span></button>
        </>
    )
}

export default ButtonWeekDay;