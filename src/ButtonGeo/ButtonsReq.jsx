import React, { useState, useEffect, useRef } from "react";
import reqButStyle from './ButtonsReq.module.css';
import ButtonWeekDay from '../ButtonToggle/ButtonToggle';
import { nameToday, nameWeek } from "../Data/Data";


const ButtonsReq = (props) => {
    const [datasGeo, setDatasGeo] = useState();
    const [datasWea, setDatasWea] = useState();
    const [status, setStatus] = useState();
    const refGeo = useRef();
    const refWea = useRef();
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const dataFromInput = props.dataInputForReq;
    const requestTown = `${endPoint}q=${dataFromInput}&limit=1&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`;
   

    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refWea.current){
            fetch(requestTown)
            .then(response => response.json())
            .then(data => {setDatasWea(data)
                console.log(data)  
            })
        }
        
        }
        window.addEventListener("click", heandleWeahter)

        return () => {
        window.removeEventListener("click", heandleWeahter)
        }
    },[requestTown])


    const error = () => {
        setStatus('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт');
        alert('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт')
    }
    
     const success = (position) => {
        fetch(`${endPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`)
        .then(response => response.json())
        .then(data => {setDatasGeo(data)
            console.log(data) })
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
        <div className={reqButStyle.container}>
            <div>
                <button className={reqButStyle.button} ref={refWea}>{props.weaNameBut}</button>
                <button className={reqButStyle.button} ref={refGeo}>{props.geoNameBut}</button>
            </div>
            <div className={reqButStyle.buttonToggle}>
                <ButtonWeekDay nameButton={nameToday}/>
                {/* <ButtonWeekDay nameButton={nameWeek}/> */}
            </div>
        </div>
            
        </>
    )
}

export default ButtonsReq;