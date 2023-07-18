import React from "react";
import StyleDay from './ThisDay.module.css';
import GlobalSvg from '../GlobalSvg/GlobalSvg';

const ThisDay = (props) => {

    return (
        <>
            <GlobalSvg id='sun' />
            <div className={StyleDay.temp}>20</div>
            <div className={StyleDay.day}>Сегодня</div>
            <div className={StyleDay.time}>Время: 13:30</div>
            <div className={StyleDay.city}>Город: Минск</div>
        </>
    )
}

export default ThisDay;