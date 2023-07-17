import React from 'react';
import toggleStyle from './ButtonsWeekDay.module.css'; 
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { nameToday, nameWeek } from '../Data/Data';


const ButtonsWeekDay = (props) => {
    const [state, setState] = useState();
    const ref = useRef();


    useEffect(() => {
        function toggleWeather(e) {
            if(e.target === ref.current){
                setState(true);   
            }else if(e.target !== ref.current && e.target.tagName === 'SPAN'){
                setState(false);
            }
        }
        window.addEventListener("click", toggleWeather)

        return () => {
        window.removeEventListener("click", toggleWeather)
        }
      },[])

    return (
        <>
        <div>
            <div className={toggleStyle.buttonsPosition}>
                <button className={state ? toggleStyle.buttonPassive : toggleStyle.buttonActive}><span ref={ref} className={toggleStyle.targetClick}>{nameToday}</span></button>
                <button className={state ? toggleStyle.buttonActive : toggleStyle.buttonPassive}><span ref={ref} className={toggleStyle.targetClick}>{nameWeek}</span></button>
            </div>
            <div>
                <div className={toggleStyle.displeyed}>
                <h4>{props.datasWeaTown}</h4>
                <h4>{props.datasWeaTemp}</h4>
                <h4>{props.datasWeaDesc}</h4>
            </div>
            </div>
        </div>
            
        </>
    )
}

export default ButtonsWeekDay;