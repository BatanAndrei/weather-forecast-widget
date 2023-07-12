import React, { useState } from "react";
import inputStyle from './Imput.module.css';
import ButtonGeo from '../ButtonGeo/ButtonGeo';
import ButtonWeekDay from '../ButtonToggle/ButtonToggle';
import { nameRecGeo, nameToday, nameWeek } from '../Data/Data';

const InputTown = () => {
    const [dataInputField, setdataInputField] = useState('');
    
    function handleChange(e) {
        setdataInputField(e.target.value);
          }

    return (
        <>
            <h1 className={inputStyle.text}>Прогноз погоды</h1>
            <input type="text" className={inputStyle.modification} placeholder="Введите город или населённый пункт" onChange={handleChange} />
            <div className={inputStyle.containersReq}>
                <ButtonGeo dataInputForGeo={dataInputField} nameButton={nameRecGeo} />
                <ButtonWeekDay nameButton={nameToday}/>
                <ButtonWeekDay nameButton={nameWeek}/>
            </div>
        </>
    )
}

export default InputTown; 