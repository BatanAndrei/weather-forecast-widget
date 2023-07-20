import React from 'react';
import toggleStyle from './ToggleDisplay.module.css'; 
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { nameToday, nameWeek } from '../Data/Data';
import ThisDayWea from '../ThisDayWea/ThisDayWea';
import ThisDayGeo from '../ThisDayGeo/ThisDayGeo';


const ToggleDisplay = ({ datasWeaCity, datasWeaTemp, datasWeaTime, datasWeaIcon, datasGeoCity, datasGeoTemp, datasGeoTime, datasGeoIcon }) => {
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
                    {/* <ThisDayWea datasWeaCity={datasWeaCity} datasWeaTemp={datasWeaTemp} datasWeaTime={datasWeaTime}  datasWeaIcon={datasWeaIcon} /> */}
                    <ThisDayGeo datasGeoCity={datasGeoCity} datasGeoTemp={datasGeoTemp} datasGeoTime={datasGeoTime}  datasGeoIcon={datasGeoIcon} />
                </div>
            </div>
        </>
    )
}

export default ToggleDisplay;