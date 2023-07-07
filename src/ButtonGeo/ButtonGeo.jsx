import React from "react";
import GeoButStyle from './ButtonGeo.module.css';

const ButtonGeo = (props) => {

    return (
        <>
            <button className={GeoButStyle.button}>{props.nameButton}</button>
        </>
    )
}

export default ButtonGeo;