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

  const getUserLocation = async () => {
    function success(position : any) {
      let location = position.coords;

      setLat(location.latitude);
      setLng(location.longitude);
    }
    
    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    await navigator.geolocation.getCurrentPosition(success, error);
  };

  const getWeatherByCity = (city : string) => {
    api.get(`/weather?key=${key}&city_name=${city}`)
    .then((response) => {
      const { results } = response.data;
      console.log(results);

      setWeatherNow(results);

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
          />
          <C.SearchIcon onClick={() => getWeatherByCity(city)}>
            <FiSearch size={24} color="#2EA9D3"/>
          </C.SearchIcon>

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
