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
            console.log(ref)
        }else if(e.target !== ref.current && e.target.tagName === 'BUTTON'){
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
            <button ref={ref} className={state ? toggleStyle.buttonPassive : toggleStyle.buttonActive}>{props.nameButton}</button>
        </>
    )
}

export default ButtonWeekDay;