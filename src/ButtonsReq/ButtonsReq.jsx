import React, { useState, useEffect, useRef } from "react";
import reqButStyle from './ButtonsReq.module.css';
import ButtonsWeekDay from '../ToggleDisplay/ToggleDisplay';

const ButtonsReq = (props) => {
    const [datasGeo, setDatasGeo] = useState();
    const [datasWeaTown, setDatasWeaTown] = useState();
    const [datasWeaTemp, setDatasWeaCountryTemp] = useState();
    const [datasWeaDesc, setDatasWeaDesc] = useState();
    const [statusMess, setStatusMess] = useState('');
    const refGeo = useRef();
    const refWea = useRef();
    const endPointGeo = 'https://api.openweathermap.org/data/3.0/onecall?';
    const endPointWea = 'https://api.openweathermap.org/data/2.5/weather?'
    const dataFromInput = props.dataInputBut;
    const requestTown = `${endPointWea}q=${dataFromInput}&limit=1&appid=1cc8827af65271374080f61bcb1007fe&lang=ru&units=metric`;
   

    useEffect(() => {
        const heandleWeahter = (e) => {
            if(e.target === refGeo.current){
                refGeo.current.style.fontWeight = 700;
                refWea.current.style.fontWeight = 400;
            }else if(e.target !== refGeo.current && e.target.tagName === 'SECTION'){
                refGeo.current.style.fontWeight = 400;
            }
    
            if(e.target === refWea.current && dataFromInput){
                setStatusMess(' ')
                refWea.current.style.fontWeight = 700;
                fetch(requestTown)
                .then(response => response.json())
                .then(data => {setDatasWeaTown(data.name)
                    setDatasWeaCountryTemp(data.main.temp)
                    setDatasWeaDesc(data.weather[0].description)
                /* console.log(data) */})
            }else if(e.target === refWea.current && !dataFromInput && e.target.tagName === 'SECTION'){
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
        fetch(`${endPointGeo}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1cc8827af65271374080f61bcb1007fe&lang=ru&units=metric`)
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
                <ButtonsWeekDay datasGeo={datasGeo} datasWeaTown={datasWeaTown} datasWeaTemp={datasWeaTemp} datasWeaDesc={datasWeaDesc} />
            </div>
        </>
    )
}

export default ButtonsReq;