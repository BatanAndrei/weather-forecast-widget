import React, { useEffect, useRef } from "react";
import { useState } from "react";
import WeatherButStyle from './ButtonWea.module.css';

const ButtonWeather = (props) => {
    const [datas, setDatas] = useState();
    const refWea = useRef();
    const dataFromInput = props.dataInputaWeatherGet;
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const requestGeo = `${endPoint}lat=${props.lat}&lon=${props.lon}&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`;
    const requesttown = `${endPoint}q=${dataFromInput}&limit=1&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`;
   
    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refWea.current){
            fetch(requesttown)
            .then(response => response.json())
            .then(data => {setDatas(data)
                console.log(data)  
            })
        }
        }
        window.addEventListener("click", heandleWeahter)

        return () => {
        window.removeEventListener("click", heandleWeahter)
        }
    },[requestGeo, requesttown])

    return (
        <>
            <button className={WeatherButStyle.button} ref={refWea}>{props.nameButton}</button>
        </>
    )
}

export default ButtonWeather;