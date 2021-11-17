//Libraries
import { useEffect, useState, } from 'react';
import WeatherDay from './components/WeatherWeekDay';

//Services
import { api, key } from './services/api';

//Styles
import * as C from './App.styles';

//Assets
import logo from './assets/Logo.png';
import sun from './assets/sun.png';
import Search from './components/Search';
import WeatherToday from './components/WeatherToday';

type Weather = {
  city: string,
  temp: string,
  forecast: [{}],
}

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [weatherNow, setWeatherNow] = useState<Weather>()
  const [weather, setWeather] = useState()

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
      
      setWeatherNow(results);
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
      const { results } = response.data;
      console.log(results);
      
      setWeatherNow(results);
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
          <C.WeatherWrapper>

            <C.WeatherWeek>
              {weatherNow?.forecast.slice(1,6).map(item => <WeatherDay data={item}/>)}
            </C.WeatherWeek>

            <C.WeatherUpdate>Atualizado há alguns minutos...</C.WeatherUpdate>
        </C.WeatherWrapper>
        </C.WeatherArea>

      </C.Container>
    </C.Wrapper>
  );
}

export default App;
