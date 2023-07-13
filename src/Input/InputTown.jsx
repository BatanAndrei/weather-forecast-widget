import React, { useState } from "react";
import inputStyle from './Imput.module.css';
import ButtonsReq from '../ButtonsReq/ButtonsReq';
import { nameRecGeo, nameReqWeather } from '../Data/Data';

const InputTown = () => {
    const [dataInputField, setdataInputField] = useState('');
    
    function handleChange(e) {
        setdataInputField(e.target.value);
          }

    return (
        <>
            <h1 className={inputStyle.text}>Прогноз погоды</h1>
            <input type="text" className={inputStyle.modification} placeholder="Введите город или населённый пункт" onChange={handleChange} />
            <div>
                <ButtonsReq dataInputForReq={dataInputField} geoNameBut={nameRecGeo} weaNameBut={nameReqWeather} />
            </div>
        </>
    )
}

export default InputTown; 