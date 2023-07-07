import React from "react";
import inputStyle from './Imput.module.css';

const InputTown = () => {

    return (
        <>
            <h1 className={inputStyle.text}>Прогноз погоды</h1>
            <input type="text" className={inputStyle.modification} placeholder="Введите город или населённый пункт"></input>
        </>
    )
}

export default InputTown; 