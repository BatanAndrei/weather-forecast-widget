import React, { useState, useEffect, useRef } from "react";
import GeoButStyle from './ButtonGeo.module.css';
import ButtonWeather from '../ButtonWeather/ButtonWeather';
import { nameReqWeather } from '../Data/Data'

const ButtonGeo = (props) => {
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [status, setStatus] = useState();
    const refGeo = useRef();
    const dataInputForWeather = props.dataInputForGeo;
     
    const error = () => {
        //setStatus('Невозможно получить Ваше местоположение');
        alert('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт')
    }

     const success = (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude); 
        console.log(position.coords)
        //console.log(position.coords.longitude)
        }

        useEffect(() => {
            const heandlerGeo = (e) => {
                if(e.target === refGeo.current){
                if (!navigator.geolocation) {
                    setStatus('Geolocation не поддерживается вашим браузером');
                }else{
                    setStatus('Определение местоположения...');
                    navigator.geolocation.getCurrentPosition(success, error)
                }
            }
            }

            window.addEventListener("click", heandlerGeo)

            return () => {
            window.removeEventListener("click", heandlerGeo)
            }
        },[])
    
    return (
        <>
            <ButtonWeather lat={lat} lon={lon} dataInputaWeatherGet={dataInputForWeather} nameButton={nameReqWeather} />
            <button className={GeoButStyle.button} ref={refGeo}>{props.nameButton}</button>
        </>
    )
}

export default ButtonGeo;