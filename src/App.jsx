import React from 'react';
import back from './App.module.css';
import Form from './Form/Form';

function App() {
  console.log('APP')
    return (
        <div className={back.position}>
            <div className={back.context}>
                <Form />
                <div className={back.displayWeather}></div>
            </div>
        </div>
    );
}

export default App;
