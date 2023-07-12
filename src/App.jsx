import React from 'react';
import back from './App.module.css';
import InputTown from './Input/InputTown';


function App() {
  
    return (
        <div className={back.position}>
            <div className={back.context}>
                <InputTown />
                <div className={back.containerWeather}>
                    <div className={back.displayWeather}></div>
                </div>
            </div>
        </div>
    );
}

export default App;
