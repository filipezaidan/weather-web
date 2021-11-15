//Libraries
import { useEffect, useState, } from 'react';
import { FiSearch } from 'react-icons/fi';
import WeatherDay from './components/WeatherWeekDay';

//Services
import { api, key } from './services/api';

//Styles
import * as C from './App.styles';

//Assets
import logo from './assets/Logo.png';
import sun from './assets/sun.png';

type Weather = {
  city: string,
  temp: string,
}

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [weatherNow, setWeatherNow] = useState<Weather>()

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
    })
    
  },[lat,lng])
  
  return (
    <C.Wrapper>  
      <C.Container>
        <C.Logo src={logo}/>

        <C.Search> 
          <C.SearchInput 
            placeholder="Digite uma cidade..."
            onChange={e => setCity(e.target.value)}
            value={city}
          />
          <C.SearchButton onClick={(e) => getWeatherByCity(e)}>
            <FiSearch size={24} color="#2EA9D3"/>
          </C.SearchButton>

        </C.Search>

        <C.WeatherArea>
          <C.WeatherToday>
            <C.WeatherImage src={sun}/>

            <C.WeatherTitle>{weatherNow?.temp}</C.WeatherTitle>
            <C.WeatherSubtitle>{weatherNow?.city}</C.WeatherSubtitle>

          </C.WeatherToday>

          <C.WeatherWrapper>

            <C.WeatherWeek>
              <WeatherDay/>
              <WeatherDay/>
              <WeatherDay/>
              <WeatherDay/>
            </C.WeatherWeek>

            <C.WeatherUpdate>Atualizado há alguns minutos...</C.WeatherUpdate>
        </C.WeatherWrapper>
        </C.WeatherArea>

      </C.Container>
    </C.Wrapper>
  );
}

export default App;
