import React from "react";
import input from './Imput.module.css';

const InputTown = () => {

    return (
        <>
            <h1 className={input.text}>Прогноз погоды</h1>
            <input className={input.modification} placeholder="Введите город или населённый пункт"></input>
        </>
    )
}

export default InputTown; 