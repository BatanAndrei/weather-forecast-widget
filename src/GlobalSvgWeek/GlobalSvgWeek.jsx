import React from "react";
import StyleSvg from './GlobalSvgWeek.module.css';

const GlobalSvgWeek = ({ icon }) => {
    switch (icon) {
        case '01d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/01d@2x.png'></img>   
            ) 
            case '02d':
                return (
                    <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/02d@2x.png'></img>   
                )
            case '03d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/03d@2x.png'></img>   
            )
            case '04d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/04d@2x.png'></img>   
            )
            case '09d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/09d@2x.png'></img>   
            )
            case '10d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/10d@2x.png'></img>   
            )
            case '11d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/11d@2x.png'></img>   
            )
            case '13d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/13d@2x.png'></img>   
            )
            case '01n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/01n@2x.png'></img>   
            )
            case '02n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/02n@2x.png'></img>   
            )
            case '03n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/03n@2x.png'></img>   
            )
            case '04n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/04n@2x.png'></img>   
            )
            case '09n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/09n@2x.png'></img>   
            )
            case '10n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/10n@2x.png'></img>   
            )
            case '11n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/11n@2x.png'></img>   
            )
            case '13n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/13n@2x.png'></img>   
            )
            case '50n':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/50n@2x.png'></img>   
            )
            case '50d':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/50d@2x.png'></img>   
            )
        default:
            return null;
    }
}

export default GlobalSvgWeek;