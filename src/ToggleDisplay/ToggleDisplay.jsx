import React from 'react';
import toggleStyle from './ToggleDisplay.module.css'; 
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { nameToday, nameWeek } from '../Data/Data';
import ThisDay from '../ThisDay/ThisDay';


const ToggleDisplay = ({ datasWeaCity, datasWeaTemp, datasWeaTime, datasWeaIcon }) => {
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
                <div className={toggleStyle.displeyed}>
                    <div className={toggleStyle.container}>
                        <ThisDay datasWeaCity={datasWeaCity} datasWeaTemp={datasWeaTemp} datasWeaTime={datasWeaTime}  datasWeaIcon={datasWeaIcon} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleDisplay;