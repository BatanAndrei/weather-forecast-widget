import React, { useState, useEffect, useRef } from "react";
import reqButStyle from './ButtonsReq.module.css';
import ButtonsWeekDay from '../ButtonsWeekDay/ButtonsWeekDay';

const ButtonsReq = (props) => {
    const [datasGeo, setDatasGeo] = useState([]);
    const [datasWea, setDatasWea] = useState([]);
    const [statusMess, setStatusMess] = useState('');
    const refGeo = useRef();
    const refWea = useRef();
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const dataFromInput = props.dataInputBut;
    const requestTown = `${endPoint}q=${dataFromInput}&limit=1&appid=1cc8827af65271374080f61bcb1007fe&lang=ru`;
   

    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refGeo.current){
                refGeo.current.style.fontWeight = 700;
            }else if(e.target !== refGeo.current && e.target.tagName === 'SECTION'){
                refGeo.current.style.fontWeight = 400;
            }

            if(e.target === refWea.current){
                refWea.current.style.fontWeight = 700;
            }else if(e.target !== refWea.current && e.target.tagName === 'SECTION'){
                refWea.current.style.fontWeight = 400;
            }
            
            if(e.target === refWea.current && dataFromInput){
                setStatusMess(' ')
                fetch(requestTown)
                .then(response => response.json())
                .then(data => {setDatasWea(data)
                console.log(data)})
            }else if(e.target === refWea.current && !dataFromInput){
                setStatusMess('↑ ↑ ↑ - Заполните поле - ↑ ↑ ↑');
                refWea.current.style.fontWeight = 400;
            }
        
        }
        window.addEventListener("click", heandleWeahter)

        return () => {
        window.removeEventListener("click", heandleWeahter)
        }
    },[requestTown])


    const error = () => {
        alert('Введите город или населённый пункт. Воспользуйтесь кнопкой "Прогноз по городу"');
        refGeo.current.style.fontWeight = 400;
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
              
    return (   
        <>
            <p className={reqButStyle.message}>{statusMess}</p>
            <div className={reqButStyle.buttonsReqPosition}>
                <button className={reqButStyle.buttonPoss}><section ref={refWea}>{props.weaNameBut}</section></button>
                <button className={reqButStyle.buttonPoss}><section ref={refGeo}>{props.geoNameBut}</section></button>
            </div>
            <div className={reqButStyle.buttonToggle}>
                <ButtonsWeekDay datasGeo={datasGeo} datasWea={datasWea} />
            </div>
        </>
    )
}

export default ButtonsReq;