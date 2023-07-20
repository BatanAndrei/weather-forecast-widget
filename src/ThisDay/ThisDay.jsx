import React, { useState } from "react";
import StyleDay from './ThisDay.module.css';
import GlobalSvg from '../GlobalSvg/GlobalSvg';

const ThisDay = ({ datasWeaTime, datasWeaTemp, datasWeaIcon, datasWeaCity }) => {
     const dataTemp = Math.round(datasWeaTemp);
     const dataDateTime = datasWeaTime;

     const timeConverter = (UNIX_timestamp) => {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();

        let valueDate = date + '.' + month;
        let valueTime = hour + ':' + min;
       
            return [valueDate, valueTime];
    };
    let valuesDateTime = timeConverter(dataDateTime)
    let resultDate = valuesDateTime[0];
    let resultTime = valuesDateTime[1]
  
    return (
        <>
            <div className={StyleDay.container}>
                <GlobalSvg icon={datasWeaIcon} />
                <h4 className={StyleDay.temp}>{dataTemp}°</h4>
                <h4 className={StyleDay.day}>Сегодня: {resultDate}</h4>
                <h4 className={StyleDay.time}>Время: {resultTime}</h4>
                <h4 className={StyleDay.city}>Город: {datasWeaCity}</h4>
            </div>
        </>
    )
}

export default ThisDay;
