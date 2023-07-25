import React from 'react';
import back from './App.module.css';
import InputTown from './Input/InputTown';
import ButtonsReq from './ButtonsReq/ButtonsReq';
import { useState } from 'react';


function App() {
   
    const [dataInput, setdataInput] = useState('');

    const handleChange = (dataInput) => {
        setdataInput(dataInput)
    }
    return (
        <div className={back.position}>
            <div className={back.context}>
                <InputTown onChange={handleChange} />
                <div className={back.displayWeather}></div>
                <ButtonsReq dataInput={dataInput} />
            </div>
        </div>
    );
}

export default App;
