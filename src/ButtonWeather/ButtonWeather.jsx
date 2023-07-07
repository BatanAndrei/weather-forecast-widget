import React from "react";
import { useState } from "react";
import WeatherButStyle from './ButtonWea.module.css';

const ButtonWeather = (props) => {
    const [datas, setDatas] = useState();

    const heandleWeahter = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {setDatas(data)
            console.log(data)
        })
    }

    return (
        <>
            <button className={WeatherButStyle.button} onClick={heandleWeahter}>{props.nameButton}</button>
        </>
    )
}

export default ButtonWeather;