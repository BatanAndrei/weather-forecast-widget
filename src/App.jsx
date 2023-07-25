import React from 'react';
import back from './App.module.css';
import Form from './Form/Form';
import ToggleDisplay from './ToggleDisplay/ToggleDisplay';
import {useState} from 'react';

function App() {
    
    const [datasWeaCity, setDatasWeaCity] = useState('');
    const [datasWeaTemp, setDatasWeaTemp] = useState('');
    const [datasWeaTime, setDatasWeaTime] = useState('');
    const [datasWeaIcon, setDatasWeaIcon] = useState('');

    const [datasGeoCity, setDatasGeoCity] = useState('');
    const [datasGeoTemp, setDatasGeoTemp] = useState('');
    const [datasGeoTime, setDatasGeoTime] = useState('');
    const [datasGeoIcon, setDatasGeoIcon] = useState();
    
    const [datasWeekWea, setDatasWeekWea] = useState([]);
    const [datasWeekWeaCity, setDatasWeekWeaCity] = useState('');
    const [datasWeekGeo, setDatasWeekGeo] = useState([]);
    const [datasWeekGeoCity, setDatasWeekGeoCity] = useState('');

    const [visibleCurrentDay, setVisibleCurrentDay] = useState(null);    

    const heandleWeahter = (generalDatasWea) => {
        setDatasWeaCity(generalDatasWea);  
        setDatasWeaTemp(generalDatasWea.current.temp);   
        setDatasWeaTime(generalDatasWea.current.dt);
        setDatasWeaIcon(generalDatasWea.current.weather[0].icon);
        
        setDatasWeekWea(generalDatasWea.daily);
        setDatasWeekWeaCity(generalDatasWea);
        
        setVisibleCurrentDay(true)
    }
    
    const heandlerGeo = (generalDatasGeo) => {
        setDatasGeoCity(generalDatasGeo);   
        setDatasGeoTemp(generalDatasGeo.current.temp);
        setDatasGeoTime(generalDatasGeo.current.dt);
        setDatasGeoIcon(generalDatasGeo.current.weather[0].icon);

        setDatasWeekGeo(generalDatasGeo.daily);
        setDatasWeekGeoCity(generalDatasGeo);

        setVisibleCurrentDay(false)
    }
  
    return (
        <div className={back.position}>
            <div className={back.context}>
                <Form generalDatasWea={heandleWeahter} generalDatasGeo={heandlerGeo} />
            <div className={back.displayWeather}></div>
            <div className={back.buttonToggle}>
                <ToggleDisplay datasGeoCity={datasGeoCity} datasGeoTemp={datasGeoTemp} datasGeoTime={datasGeoTime} datasGeoIcon={datasGeoIcon} datasWeaCity={datasWeaCity} datasWeaTemp={datasWeaTemp} datasWeaTime={datasWeaTime}  datasWeaIcon={datasWeaIcon} visibleCurrentDay={visibleCurrentDay} datasWeekWea={datasWeekWea} datasWeekWeaCity={datasWeekWeaCity} datasWeekGeo={datasWeekGeo} datasWeekGeoCity={datasWeekGeoCity} />
            </div>
            </div>
        </div>
    );
}

export default App;
