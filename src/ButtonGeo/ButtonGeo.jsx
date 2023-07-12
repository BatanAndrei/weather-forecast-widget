import React, { useState, useEffect, useRef } from "react";
import GeoButStyle from './ButtonGeo.module.css';
import ButtonWeather from '../ButtonWeather/ButtonWeather';
import { nameReqWeather } from '../Data/Data'

const ButtonGeo = (props) => {
    const [datas, setDatas] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [status, setStatus] = useState();
    const refGeo = useRef();
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const dataInputForWeather = props.dataInputForGeo;
     
    const error = () => {
        //setStatus('Невозможно получить Ваше местоположение');
        alert('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт')
    }
    
     const success = (position) => {
        fetch(`${endPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`)
        .then(response => response.json())
        .then(data => {setDatas(data)
            console.log(data) })

        setLat(position.coords.latitude);
        setLon(position.coords.longitude); 
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
            <ButtonWeather dataInputaWeatherGet={dataInputForWeather} nameButton={nameReqWeather} />
            <button className={GeoButStyle.button} ref={refGeo}>{props.nameButton}</button>
        </>
    )
}

export default ButtonGeo;