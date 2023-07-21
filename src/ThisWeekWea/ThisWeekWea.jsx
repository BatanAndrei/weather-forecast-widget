import React from "react";
import StyleWeek from '../ThisWeekWea/ThisWeekWea.module.css';
import GlobalSvgWeek from '../GlobalSvgWeek/GlobalSvgWeek';

const ThisWeekWea = ({ datasWeekWea, datasWeekWeaCity }) => {
    console.log(datasWeekWea)
    console.log(datasWeekWeaCity)

    const timeConverter = (UNIX_timestamp) => {
       let a = new Date(UNIX_timestamp * 1000);
       let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
       let year = a.getFullYear();
       let month = months[a.getMonth()];
       let date = a.getDate();
       let hour = a.getHours();
       let min = a.getMinutes();
       let sec = a.getSeconds();

       let time = date + '.' + month;
     
       return time;
   };
   
    return (
        <>
            <div className={StyleWeek.container}>
                {datasWeekWea.map(item => 
                <div key={item.id} className={StyleWeek.items}>
                    <GlobalSvgWeek icon={item.weather[0].icon} />
                    <h4 className={StyleWeek.temp}>{Math.round(item.temp.day)}°</h4>
                    <h4 className={StyleWeek.day}>{timeConverter(item.dt)}</h4>
                    <h4 className={StyleWeek.city}>{datasWeekWeaCity.timezone}</h4>
                </div>)}
            </div>
        </>
    )
}

export default ThisWeekWea;