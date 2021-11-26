//Libraries
import { useEffect, useState, } from 'react';

//Services
import { api, key } from './services/api';

//Styles
import * as C from './App.styles';

//Assets
import logo from './assets/Logo.png';
import Search from './components/Search';
import WeatherToday from './components/WeatherToday';
import WeatherForecast from './components/WeatherForecast';

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [weather, setWeather] = useState();

  const getUserLocation = () => {
    function success(position : any) {
      const {latitude, longitude} = position.coords;

      setLat(latitude);
      setLng(longitude);
    }
    
    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const getWeatherByCity = (e: any) => {
    e.preventDefault();

    api.get(`/weather?key=${key}&city_name=${city}`)
    .then((response) => {
      const { results } = response.data;
      
      setWeather(results);
      setCity('');      
    })
  }
  
  useEffect(() => {
    getUserLocation();
  },[])
  
  useEffect(() => {
    if(lat && lng !== '')
    api.get(`/weather?key=${key}&lat=${lat}&lon=${lng}`)
    .then((response) => {
      console.log(response.data);
      const { results } = response.data;
      
      setWeather(results);
    })
    
  },[lat,lng])
  
  return (
    <C.Wrapper>  
      <C.Container>
        <C.Logo src={logo}/>

        <Search 
          city={city} 
          onChange={ e => setCity(e.target.value)}
          getWeatherByCity={e => getWeatherByCity(e)}
        />

        <C.WeatherArea>
          <WeatherToday data={weather}/> 
          <WeatherForecast data={weather}/>
        </C.WeatherArea>

      </C.Container>
    </C.Wrapper>
  );
}

export default App;
