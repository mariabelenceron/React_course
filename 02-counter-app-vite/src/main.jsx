import React from 'react';

import ReactDOM from 'react-dom/client'; // Se usa para renderizar la aplicacion

import {CounterApp} from './CounterApp';
import { FirstApp } from './FirstApp';

// import { HelloWorldApp } from './HelloWorldApp';

import './styles.css'; //Tener estilos en toda la aplicación


// Renderizar el documento
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Properties (title) 
            boolean = true de manera implicita
            */}

        {/* <FirstApp title="Hola" subtitle="Soy Belen!"/> */}

        <CounterApp value={1}/>
    </React.StrictMode>
)
