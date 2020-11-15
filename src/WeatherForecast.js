import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props){
   const[loaded,setLoaded]=useState(false);
   const[forecast,setForecast]=useState(null);

    function handleForecastResponse(response){
          setForecast(response.data);
          setLoaded(true);
    }
   if (loaded && props.city === forecast.city.name){
       return(
           <div className="WeatherForecast row">
           <WeatherForecastPreview data={forecast.list[0]}/>
           <WeatherForecastPreview data={forecast.list[1]}/>
           <WeatherForecastPreview data={forecast.list[2]}/>
           <WeatherForecastPreview data={forecast.list[3]}/>
           <WeatherForecastPreview data={forecast.list[4]}/>
                             
            </div>
               
   );
   }
   else{
       
    let apiKey="5e39f9d1a00339cac657e6d5e124e87d";
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleForecastResponse);
       
    return (null);
   }
}