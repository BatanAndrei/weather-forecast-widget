import React from 'react';
import back from './App.module.css';
import InputTown from './Input/InputTown';
import ButtonReq from './Button/ButtonReq';
import ButtonToggle from './ButtonToggle/ButtonToggle';
import { buttonReqWeather, buttonRecGeo, buttonToday, buttonWeek } from './Data/Data';

function App() {
  
    return (
        <div className={back.position}>
            <div className={back.context}>
                <InputTown />
                <div className={back.containerWeather}>
                    <div className={back.displayWeather}>

                    </div>
                    <ButtonToggle nameButton={buttonToday}/>
                    <ButtonToggle nameButton={buttonWeek}/>
                </div>
                <div className={back.containersReq}>
                    <ButtonReq nameButton={buttonReqWeather} />
                    <ButtonReq nameButton={buttonRecGeo} />
                </div>
            </div>
        </div>
    );
}

export default App;
