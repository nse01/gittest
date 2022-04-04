import React,{useState,useEffect} from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

export default function TemperatureContainer () {

    const [temperatureC, setTemperatureC] = useState();
    const [temperatureF, setTemperatureF] = useState();
    const [tempText, setTempText] = useState('');

    const toCelsius = (f) => {
        return (f - 32) * 5 / 9;
    }
    const toFahrenheit = (c) => {
        return (c * 9 / 5) + 32;
    }

    const changeCelsius = (c) => {
        setTemperatureC(c);   
        setTemperatureF(toFahrenheit(c))
        //Early Return
        console.log(temperatureF)
        if(c.length === 0){
            return setTempText('');
        }  
        if(c >= 100){
            return setTempText('끓어요');
        }
        return setTempText('안끓어요');
    }
    const tryFahrenheit = (temperature) => {
        
    }

    
    return(
        <div>
            <Celsius 
            changeCelsius={changeCelsius} temperatureF={temperatureF} 
            toCelsius={toCelsius} toFahrenheit={toFahrenheit}/>
            <Fahrenheit 
            temperatureC={temperatureC} temperatureF={temperatureF}
            toCelsius={toCelsius} toFahrenheit={toFahrenheit}/>
            <div style={{margin:'10px 0',fontWeight:'700',fontSize:'20px'}}>{tempText}</div>
        </div>
    )
}