import React from 'react'

const SingleListItem = (props) => {
    return (
        <ul className="singleListItem">
            <li className="time">{props.time}</li>
            <li className="weatherImage"><img src={`http://openweathermap.org/img/wn/${props.weatherDesc}@2x.png`} /></li>
            <li className="temp">{Math.round(props.temperature)} °C</li>
            <li className="humidity">{props.humidity} %</li>
            <li className="wind">{props.windSpeed.toFixed(1)} km/h</li>
            <li className="pressure">{props.pressure} mBar</li>
        </ul>
    )
}

export default SingleListItem
