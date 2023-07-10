import React, { useState, useEffect, useRef } from "react";
import GeoButStyle from './ButtonGeo.module.css';

const ButtonGeo = (props) => {
    const [status, setStatus] = useState();
    const refGeo = useRef();
    
    const error = () => {
        //setStatus('Невозможно получить Ваше местоположение');
        alert('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт')
    }

     const success = (position) => {
        setStatus(position.coords)
        console.log(position.coords)   
        }

        useEffect(() => {
            const heandlerGeo = (e) => {
                if(e.target === refGeo.current){
                if (!navigator.geolocation) {
                    setStatus('Geolocation не поддерживается вашим браузером');
                }else{
                    setStatus('Определение местоположения...');
                    navigator.geolocation.getCurrentPosition(success, error)
                }
            }
            }

            window.addEventListener("click", heandlerGeo)

            return () => {
            window.removeEventListener("click", heandlerGeo)
            }
        },[])
    
    return (
        <>
            <button className={GeoButStyle.button} ref={refGeo}>{props.nameButton}</button>
        </>
    )
}

export default ButtonGeo;