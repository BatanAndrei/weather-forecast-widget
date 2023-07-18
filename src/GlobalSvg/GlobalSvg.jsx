import React from "react";
import StyleSvg from './GlobalSvg.module.css';

const GlobalSvg = ({id}) => {
    switch (id) {
        case 'sun':
            return (
                <img className={StyleSvg.icon} src='https://openweathermap.org/img/wn/01d@2x.png'></img>   
            ) 
        default:
            return null;
    }
}

export default GlobalSvg;