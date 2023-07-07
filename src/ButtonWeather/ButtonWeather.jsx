import React from "react";
import WeatherButStyle from './ButtonWea.module.css';


const ButtonWeather = (props) => {

    return (
        <>
            <button className={WeatherButStyle.button}>{props.nameButton}</button>
        </>
    )
}

export default ButtonWeather;