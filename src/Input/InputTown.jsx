import React, { useState } from "react";
import inputStyle from './Imput.module.css';
import ButtonsReq from '../ButtonsReq/ButtonsReq';


const InputTown = () => {
    const [dataInput, setdataInput] = useState('');
    
    function handleChange(e) {
        setdataInput(e.target.value);
          }

    return (
        <>
            <h1 className={inputStyle.text}>Прогноз погоды</h1>
            <input type="text" className={inputStyle.modification} placeholder="Введите город или населённый пункт" onChange={handleChange} value={dataInput} />
            <div>
                <ButtonsReq dataInput={dataInput} />
            </div>
        </>
    )
}

export default InputTown; 
