import React, { useState, useEffect } from "react";
import GeoButStyle from './ButtonGeo.module.css';

const ButtonGeo = (props) => {
    const [status, setStatus] = useState();
    
    const error = () => {
        setStatus('Невозможно получить Ваше местоположение');
    }

     const success = (position) => {
        setStatus(position.coords)
          
        console.log(position.coords)
    }

    const heandlerGeo = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation не поддерживается вашим браузером');
        }else{
            setStatus('Определение местоположения...');
            navigator.geolocation.getCurrentPosition(success, error)
        }
    } 

    return (
        <>
            <button className={GeoButStyle.button} onClick={heandlerGeo}>{props.nameButton}</button>
        </>
    )
}

export default ButtonGeo;