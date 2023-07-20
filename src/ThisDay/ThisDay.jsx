import React, { useState } from "react";
import StyleDay from './ThisDay.module.css';
import GlobalSvg from '../GlobalSvg/GlobalSvg';

const ThisDay = ({ datasWeaTime, datasWeaTemp, datasWeaIcon, datasWeaCity }) => {
     const temp = Math.round(datasWeaTemp);
     const time = datasWeaTime;

     const timeConverter = (UNIX_timestamp) => {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + '.' + month + ' ' + hour + ':' + min;
        return time;
    };
    let res = timeConverter(time)
     console.log(res)
   
    return (
        <>
            <GlobalSvg icon={datasWeaIcon} />
            <h4 className={StyleDay.temp}>{temp}°</h4>
            <h4 className={StyleDay.day}>{res}</h4>
            {/* <h4 className={StyleDay.time}></h4> */}
            <h4 className={StyleDay.city}>Город: {datasWeaCity}</h4>
        </>
    )
}

export default ThisDay;
