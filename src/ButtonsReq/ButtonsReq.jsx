import React, { useState, useEffect, useRef } from "react";
import reqButStyle from './ButtonsReq.module.css';
import ToggleDisplay from '../ToggleDisplay/ToggleDisplay';

const ButtonsReq = ({ weaNameBut, geoNameBut, dataInput }) => {
    const [datasGeoCity, setDatasGeoCity] = useState();
    const [datasGeoTemp, setDatasGeoTemp] = useState('');
    const [datasGeoTime, setDatasGeoTime] = useState('');
    const [datasGeoIcon, setDatasGeoIcon] = useState();

    const [datasWeaCity, setDatasWeaCity] = useState();
    const [datasWeaTemp, setDatasWeaTemp] = useState('');
    const [datasWeaTime, setDatasWeaTime] = useState('');
    const [datasWeaIcon, setDatasWeaIcon] = useState();

    const [statusMess, setStatusMess] = useState('');
    const [visibleCurrentDay, setVisibleCurrentDay] = useState(null)

    const refGeo = useRef();
    const refWea = useRef();

    const dataFromInput = dataInput;
    const key = '1cc8827af65271374080f61bcb1007fe';
    const endPoint = 'https://api.openweathermap.org/data/3.0/onecall?';
    const geoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${dataFromInput}&limit=1&appid=${key}&lang=ru&units=metric`;
   
    useEffect(() => {
        const heandleWeahter = (e) => {
            setVisibleCurrentDay(false)
            if(e.target === refGeo.current){
                refGeo.current.style.fontWeight = 700;
                refWea.current.style.fontWeight = 400;
            }else if(e.target !== refGeo.current && e.target.tagName === 'SECTION'){
                refGeo.current.style.fontWeight = 400;
                setVisibleCurrentDay(true)
            }
    
            if(e.target === refWea.current && dataFromInput){
                setStatusMess(' ')
                setStatusMess('По выбранному городу...');
                refWea.current.style.fontWeight = 700;
                fetch(geoCoding)
                .then(response => response.json())
                .then(data => {
                  
                    fetch(`${endPoint}lat=${data[0].lat}&lon=${data[0].lon}&appid=${key}&lang=ru&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        setDatasWeaCity(data.timezone)
                        setDatasWeaTemp(data.current.temp)
                        setDatasWeaTime(data.current.dt)
                        setDatasWeaIcon(data.current.weather[0].icon)
                    console.log(data)})
            })
                
            }else if(e.target === refWea.current && !dataFromInput && e.target.tagName === 'SECTION'){
                setStatusMess('↑ ↑ ↑ - Заполните поле - ↑ ↑ ↑');
                refWea.current.style.fontWeight = 400;
            }
        }
        window.addEventListener("click", heandleWeahter)

        return () => {
        window.removeEventListener("click", heandleWeahter)
        }
    },[geoCoding])

    const error = () => {
        alert('Введите город или населённый пункт. Воспользуйтесь кнопкой "Прогноз по городу"');
        refGeo.current.style.fontWeight = 400;
    }
    
     const success = (position) => {
        fetch(`${endPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&lang=ru&units=metric`)
        .then(response => response.json())
        .then(data => {
            setDatasGeoCity(data.timezone)
            setDatasGeoTemp(data.current.temp)
            setDatasGeoTime(data.current.dt)
            setDatasGeoIcon(data.current.weather[0].icon)
            console.log(data)})
        }

        useEffect(() => {
            const heandlerGeo = (e) => {
                setVisibleCurrentDay(false)
                if(e.target === refGeo.current){
                if (!navigator.geolocation) {
                    setStatusMess('Geolocation не поддерживается вашим браузером');
                }else{
                    setStatusMess('По геопозиции...');
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
                <button className={reqButStyle.buttonPoss}><section ref={refWea}>{weaNameBut}</section></button>
                <button className={reqButStyle.buttonPoss}><section ref={refGeo}>{geoNameBut}</section></button>
            </div>
            <div className={reqButStyle.buttonToggle}>
                <ToggleDisplay datasGeoCity={datasGeoCity} datasGeoTemp={datasGeoTemp} datasGeoTime={datasGeoTime} datasGeoIcon={datasGeoIcon} datasWeaCity={datasWeaCity} datasWeaTemp={datasWeaTemp} datasWeaTime={datasWeaTime}  datasWeaIcon={datasWeaIcon} visibleCurrentDay={visibleCurrentDay}/>
            </div>
        </>
    )  
}

export default ButtonsReq;