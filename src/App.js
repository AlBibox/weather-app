import Form from './components/Form'
import Weather from './components/Weather'
import React, {useState} from 'react'
import './style/style.scss'


function App() {
  const [formValue, setFormValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false); 


  const getPromiseData = async (cityName) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=fad0e1b9cda3c8b672a274f6df50aa5c`);

    if (promise.ok === true) {
      const data = await promise.json();
      setWeatherData(data);
      setError(false);
        
    } else {
      setWeatherData(null);
      setError(true);
    }
  }


  return (
    <div className="App">
      <h1>Magic weather</h1>
      <Form
        inputValue={formValue}
        handleInput={setFormValue}
        handleData={() => getPromiseData(formValue)}
       />
       
       {weatherData &&
          <Weather
            title={weatherData.city.name}
            weatherInfo={weatherData}
          />
       }

       {error &&
        <h4>Error! Please check that you have entered the data correctly, or try again later.</h4>
       }
       
    </div>
  )
}

export default App;
