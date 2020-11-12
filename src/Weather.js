import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
const[weatherData, setWeatherData] = useState({ready:false});

function handleResponse(response){
console.log(response.data);

setWeatherData({
    ready:true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    date:" Tuesday 12.11.2020",
    description:response.data.weather[0].description,
    icon:"http://openweathermap.org/img/wn/10d@2x.png",
    wind:response.data.wind.speed,
    city:response.data.name
});

    }
    
   // const apiKey="5e39f9d1a00339cac657e6d5e124e87d";
   // let city="Zürich";
    //let apiUrl=`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API key}&units=metric`;
    //axios.get(apiUrl).then(handleResponse);
if (weatherData.ready){

    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">                    
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>                
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row  mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.icon} alt={weatherData.description} className="float-left"/>
                    <div className="float-left">
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="units"> °C</span>
                </div>
                </div>
                </div>
                <div className="row-6">
                    <ul>
                        
                        <li>
    Humidity:{weatherData.humidity}%
                            </li>
                        <li>
                            Wind:{weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );}
    else{
        const apiKey="5e39f9d1a00339cac657e6d5e124e87d";
    
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....."
    }
}