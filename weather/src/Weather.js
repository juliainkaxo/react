import React from 'react'
import { useEffect , useState} from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'd89751c6fcdd1acee2f5ab0eaae1be1c';

export default function Weather({lat, lng}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(async() => {
        getWeather();
    }, [])

    async function getWeather() {
        const url = API_URL + 
        'lat=' + lat +
        '&lon=' + lng +
        '&units=metric' + 
        '&appid=' + API_KEY;

        try {
            const response = await fetch(url);
            const result = await response.json();
            if(response.ok) {
                if(result.main != undefined) {
                    setTemp(result.main.temp);
                    setSpeed(result.wind.speed);
                    setDirection(result.wind.deg);
                    setDescription(result.weather[0].description);
                    setIcon(ICON_URL + result.weather[0].icon + '@2x.png');
                }
            } else {
                alert('Could not retrieve weather information!')
            }
        } catch (error) {
            alert('Could not connect to the server.')
        }
    }

    return (
        <>
        <h3>Weather at your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt=""/>
        </>
    )
}
