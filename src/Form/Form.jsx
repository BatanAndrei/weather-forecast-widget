import React, { useState, useEffect, useRef } from "react";
import FormStyle from './Form.module.css';


const CustomForm = ({ generalDatasWea, generalDatasGeo }) => {
    
    const [dataInput, setdataInput] = useState('');
    const [statusMess, setStatusMess] = useState('');
    
    const refGeo = useRef();
    const refWea = useRef();
    
    const dataFromInput = dataInput;
    const key = '1cc8827af65271374080f61bcb1007fe';
    const endPoint = 'https://api.openweathermap.org/data/3.0/onecall?';
    const geoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${dataFromInput}&limit=1&appid=${key}&lang=ru&units=metric`;

    const handleChange = (e) => {
        setdataInput(e.target.value);
        }
       
        useEffect(() => {
            const heandleWeahter = (e) => {
                if(e.target === refWea.current) {
                    refWea.current.style.fontWeight = 700;
                }else if(e.target !== refWea.current && e.target.tagName === 'SECTION'){
                    refWea.current.style.fontWeight = 400;
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
                            generalDatasWea(data)
                    })
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
        },[dataFromInput])
    
        const error = () => {
            alert('Введите город или населённый пункт. Воспользуйтесь кнопкой "Прогноз по городу"');
            refGeo.current.style.fontWeight = 400;
        }
        
         const success = (position) => {
            fetch(`${endPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&lang=ru&units=metric`)
            .then(response => response.json())
            .then(data => {
                generalDatasGeo(data)
                })
            }
    
            useEffect(() => {
                const heandlerGeo = (e) => {
                    if(e.target === refGeo.current) {
                        refGeo.current.style.fontWeight = 700;
                    }else if(e.target !== refGeo.current && e.target.tagName === 'SECTION'){
                        refGeo.current.style.fontWeight = 400;
                    }
                    
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
            <h1 className={FormStyle.text}>Прогноз погоды</h1>
            <input type="text" className={FormStyle.modification} placeholder="Введите город или населённый пункт" onChange={handleChange} />
            <p className={FormStyle.message}>{statusMess}</p>
            <div className={FormStyle.buttonsReqPosition}>
                <button className={FormStyle.buttonPoss}><section ref={refWea}>Прогноз по городу</section></button>
                <button className={FormStyle.buttonPoss}><section ref={refGeo}>Прогноз по GEO</section></button>
            </div>
        </>
    )
}

export default CustomForm; 
