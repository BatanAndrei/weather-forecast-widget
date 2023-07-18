import React, { useState } from "react";
import StyleDay from './ThisDay.module.css';
import GlobalSvg from '../GlobalSvg/GlobalSvg';

const ThisDay = (props) => {
   /*  const [day, setDay] = useState('')
     let temp = Math.round(props.datasWeaTemp);
     setDay(temp) */
   
    return (
        <>
            <GlobalSvg id='03d' />
            <div className={StyleDay.temp}>{}</div>
            <div className={StyleDay.day}>Сегодня</div>
            <div className={StyleDay.time}>Время: {props.datasWeaTime}</div>
            <div className={StyleDay.city}>Город: {props.datasWeaCity}</div>
        </>
    )
}

export default ThisDay;
//datasWeaCity={props.datasWeaCity} datasWeaTemp={props.datasWeaTemp} datasWeaTime={props.datasWeaTime}  datasWeaIcon={props.datasWeaIcon}