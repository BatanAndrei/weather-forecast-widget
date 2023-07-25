import React, { useState } from "react";
import inputStyle from './Imput.module.css';


const InputTown = ({ onChange }) => {
    
    const handleChange = (e) => {
        onChange(e.target.value)
          }

    return (
        <>
            <h1 className={inputStyle.text}>Прогноз погоды</h1>
            <input type="text" className={inputStyle.modification} placeholder="Введите город или населённый пункт" onChange={handleChange} />
        </>
    )
}

export default InputTown; 
