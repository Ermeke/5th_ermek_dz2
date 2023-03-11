import {useState} from 'react'
import './App.css'
import LanguageDisplay from "./components/LanguageDisplay/LanguageDisplay";
import {LanguageContext, LanguageProvider} from "./components/LanguageProvider/LanguageProvider";
import {TemperatureContext, TemperatureProvider} from "./components/TemperatureProvider/TemperatureProvider";
import TemperatureDisplay from "./components/TemperatureDis/TemperatureDis.jsx";
import TemperatureUpdate from "./components/TemperatureToggle/TemperatureToggle.jsx";
import LanguageToggle from "./components/LanguageUpdate/LanguageUpdate.jsx";

function App() {


    return (
        <LanguageProvider>
            <TemperatureProvider>
                <div>
                    <LanguageToggle/>
                    <LanguageDisplay/>
                    <TemperatureUpdate/>
                    <TemperatureDisplay/>
                </div>
            </TemperatureProvider>
        </LanguageProvider>
    )
}

export default App
