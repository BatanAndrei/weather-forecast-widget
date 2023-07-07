import React from 'react';
import back from './App.module.css';
import InputTown from './Input/InputTown';
import ButtonReq from './Button/ButtonReq';
import ButtonWeekDay from './ButtonToggle/ButtonToggle';
import { nameReqWeather, nameRecGeo, nameToday, nameWeek } from './Data/Data';

function App() {
  
    return (
        <div className={back.position}>
            <div className={back.context}>
                <InputTown />
                <div className={back.containerWeather}>
                    <div className={back.displayWeather}>

                    </div>
                    <ButtonWeekDay nameButton={nameToday}/>
                    <ButtonWeekDay nameButton={nameWeek}/>
                </div>
                <div className={back.containersReq}>
                    <ButtonReq nameButton={nameReqWeather} />
                    <ButtonReq nameButton={nameRecGeo} />
                </div>
            </div>
        </div>
    );
}

export default App;
