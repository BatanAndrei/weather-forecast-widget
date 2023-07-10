import React, { useEffect, useRef } from "react";
import { useState } from "react";
import WeatherButStyle from './ButtonWea.module.css';

const ButtonWeather = (props) => {
    const [datas, setDatas] = useState();
    const refWea = useRef();

    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refWea.current){
            fetch("https://dog.ceo/api/breeds/image/random")
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
    
    },[])

    return (
        <>
            <button className={WeatherButStyle.button} ref={refWea}>{props.nameButton}</button>
        </>
    )
}

export default ButtonWeather;