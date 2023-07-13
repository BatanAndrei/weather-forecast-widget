import React, { useState, useEffect, useRef } from "react";
import reqButStyle from './ButtonsReq.module.css';
import ButtonsWeekDay from '../ButtonsWeekDay/ButtonsWeekDay';

const ButtonsReq = (props) => {
    const [datasGeo, setDatasGeo] = useState([]);
    const [datasWea, setDatasWea] = useState([]);
    const [statusMess, setStatusMess] = useState();
    const [stateStyle, setstateStyle] = useState();
    const refGeo = useRef();
    const refWea = useRef();
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const dataFromInput = props.dataInputBut;
    const requestTown = `${endPoint}q=${dataFromInput}&limit=1&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`;
   

    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refGeo.current){
                setstateStyle(true);
            }else if(e.target !== refGeo.current && e.target.tagName === 'I'){
                setstateStyle(false);
            }

            if(e.target === refWea.current){
                setstateStyle(false);
            }else if(e.target !== refWea.current && e.target.tagName === 'I'){
                setstateStyle(true);
            }

            if(e.target === refWea.current){
            fetch(requestTown)
            .then(response => response.json())
            .then(data => {setDatasWea(data.name)
            console.log(data)})
        }
        
        }
        window.addEventListener("click", heandleWeahter)

        return () => {
        window.removeEventListener("click", heandleWeahter)
        }
    },[requestTown])


    const error = () => {
        setStatusMess('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт');
        alert('Без разрешения на получение Вашего местоположения необходимо ввести в поле город или населённый пункт')
    }
    
     const success = (position) => {
        fetch(`${endPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`)
        .then(response => response.json())
        .then(data => {setDatasGeo(data)
            console.log(data)})
        }

        useEffect(() => {
            const heandlerGeo = (e) => {
                if(e.target === refGeo.current){
                if (!navigator.geolocation) {
                    setStatusMess('Geolocation не поддерживается вашим браузером');
                }else{
                    setStatusMess('Определение местоположения...');
                    navigator.geolocation.getCurrentPosition(success, error)
                }
            }
            }

            window.addEventListener("click", heandlerGeo)

            return () => {
            window.removeEventListener("click", heandlerGeo)
            }
        },[])
    
    return ( //className={state ? toggleStyle.buttonPassive : toggleStyle.buttonActive}
        <>
            <div className={reqButStyle.buttonsReqPosition}>
                <button className={stateStyle ? reqButStyle.buttonPoss : reqButStyle.buttonActi}><i ref={refWea}>{props.weaNameBut}</i></button>
                <button className={stateStyle ? reqButStyle.buttonActi : reqButStyle.buttonPoss}><i ref={refGeo}>{props.geoNameBut}</i></button>
            </div>
            <div className={reqButStyle.buttonToggle}>
                <ButtonsWeekDay datasGeo={datasGeo} datasWea={datasWea} />
            </div>
        </>
    )
}

export default ButtonsReq;