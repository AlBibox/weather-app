import React, { useState, useEffect } from 'react'
import SingleListItem from './SingleListItem'
import { eachDayOfInterval, format } from 'date-fns'

const Weather = (props) => {

    const [daysInterval, setDaysInterval] = useState();
    const [selectedDay, setSelectedDay] = useState();

    useEffect(() => {
        console.log(props.weatherInfo);
        setDaysInterval(getDaysInterval(props.weatherInfo))
        setSelectedDay(props.weatherInfo.list[0].dt_txt.slice(0, 10));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

  


    const getDaysInterval = (obj) => {
        return eachDayOfInterval({
            start: new Date(obj.list[0].dt_txt.slice(0, 10)),
            end: new Date(obj.list[obj.list.length - 1].dt_txt.slice(0, 10)),
        }).map(singleDate => format(singleDate, "yyyy-MM-dd"));
    }

    return (
        <div className="weatherInfoContainer">
            {daysInterval &&
                <div className="weatherInfo">
                    <h3>{props.title}</h3>
                    <div className="daySelector">
                        <ul>
                            {selectedDay === daysInterval[0] ?
                                <li className="selected" onClick={() => setSelectedDay(daysInterval[0])}>{daysInterval[0]}</li>
                                :
                                <li onClick={() => setSelectedDay(daysInterval[0])}>{daysInterval[0]}</li>
                            }

                            {selectedDay === daysInterval[1] ?
                                <li className="selected" onClick={() => setSelectedDay(daysInterval[1])}>{daysInterval[1]}</li>
                                :
                                <li onClick={() => setSelectedDay(daysInterval[1])}>{daysInterval[1]}</li>
                            }

                            {selectedDay === daysInterval[2] ?
                                <li className="selected" onClick={() => setSelectedDay(daysInterval[2])}>{daysInterval[2]}</li>
                                :
                                <li onClick={() => setSelectedDay(daysInterval[2])}>{daysInterval[2]}</li>
                            }
                        </ul>
                    </div>
                    <div className="scrollableWrapper">
                        <div className="table">
                            
                            <div className="tableHeadings">
                                <h5 className="time">TIME</h5>
                                <h5 className="weatherImage">WX</h5>
                                <h5 className="temp">TEMP.</h5>
                                <h5 className="humidity">HUMIDITY</h5>
                                <h5 className="wind">WIND</h5>
                                <h5 className="pressure">PRESSURE</h5>
                            </div>

                            <div className="tableData">
                                {selectedDay === daysInterval[0] &&
                                    props.weatherInfo.list
                                        .filter(single => single.dt_txt.slice(0, 10) === daysInterval[0])
                                        .map(single =>
                                            <SingleListItem
                                                time={single.dt_txt.slice(11, 16)}
                                                weatherDesc={single.weather[0].icon}
                                                temperature={single.main.temp}
                                                humidity={single.main.humidity}
                                                windSpeed={single.wind.speed}
                                                pressure={single.main.pressure}
                                            />)
                                }

                                {selectedDay === daysInterval[1] &&
                                    props.weatherInfo.list
                                        .filter(single => single.dt_txt.slice(0, 10) === daysInterval[1])
                                        .map(single =>
                                            <SingleListItem
                                                time={single.dt_txt.slice(11, 16)}
                                                weatherDesc={single.weather[0].icon}
                                                temperature={single.main.temp}
                                                humidity={single.main.humidity}
                                                windSpeed={single.wind.speed}
                                                pressure={single.main.pressure}
                                            />)
                                }

                                {selectedDay === daysInterval[2] &&
                                    props.weatherInfo.list
                                        .filter(single => single.dt_txt.slice(0, 10) === daysInterval[2])
                                        .map(single =>
                                            <SingleListItem
                                                time={single.dt_txt.slice(11, 16)}
                                                weatherDesc={single.weather[0].icon}
                                                temperature={single.main.temp}
                                                humidity={single.main.humidity}
                                                windSpeed={single.wind.speed}
                                                pressure={single.main.pressure}
                                            />)
                                }

                            </div> {/*tableData*/}
                        </div> {/*table */}
                    </div>{/*scrollableWrapper */}
                </div>  /*weatherInfo */
            }  
        </div>/*weatherInfoContainer */
    )
}
export default Weather


