import React from "react";
import StyleWeek from '../ThisWeekWea/ThisWeekWea.module.css';
import GlobalSvgWeek from '../GlobalSvgWeek/GlobalSvgWeek';

const ThisWeekWea = ({ datasWeekWea }) => {
    console.log(datasWeekWea)
    return (
        <>
            <div className={StyleWeek.container}>
                {datasWeekWea.map(item => 
                <div key={item.id} className={StyleWeek.items}>
                    <GlobalSvgWeek icon={item.weather[0].icon} />
                    <h4 className={StyleWeek.temp}>{Math.round(item.temp.day)}°</h4>
                    <h4 className={StyleWeek.day}>Сегодня: {}</h4>
                    <h4 className={StyleWeek.time}>Время: {}</h4>
                    <h4 className={StyleWeek.city}>Город: {}</h4>
                </div>)}
            </div>
        </>
    )
}

export default ThisWeekWea;