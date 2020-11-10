import React from "react";
import "./Weather.css";
export default function Weather(){
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
            <h1>Zürich</h1>
            <ul>
                <li>
                    Tuesday,14:36
                </li>
                <li>
                    Partly Cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Partly Cloudy" />
                    10 °C
                </div>
                <div className="row-6">
                    <ul>
                        <li>
                            Precipitation:20%
                        </li>
                        <li>
                            Humidity:70%
                            </li>
                        <li>
                            Wind:10 km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}