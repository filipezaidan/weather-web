import { useEffect, useState } from 'react';

import * as C from './App.styles';
import logo from './assets/Logo.png';
import sun from './assets/sun.png';

import { FiSearch } from 'react-icons/fi';
import WeatherDay from './components/WeatherWeekDay';

import api , { key } from './services/api';
import axios from 'axios';

const App = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(
        'https://www.metaweather.com/api/location/2487956/',{
          headers: {
            'Content-Type': 'text/plain'
          }
        }
      ).then((response) => {
        console.log(response);
    })

  },[])
  // useEffect(() => {
  //   (() => {
  //     if (!navigator.geolocation) {
  //       setStatus('Geolocation is not supported by your browser');
  //     } else {
  //       setStatus('Locating...');
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         setLat(position.coords.latitude);
  //         setLng(position.coords.longitude);
  //       }, () => {
  //         setStatus('Unable to retrieve your location');
  //       });
  //     }
  //   })
  // },[])

  return (
    <C.Wrapper>  
      <C.Container>
        <C.Logo src={logo}/>

        <C.Search>
          <C.SearchInput placeholder="Digite uma cidade..."/>
          <FiSearch size={24} color="#2EA9D3"/>

        </C.Search>

        <C.WeatherArea>
          <C.WeatherToday>
            <C.WeatherImage src={sun}/>

            <C.WeatherTitle>47º</C.WeatherTitle>
            <C.WeatherSubtitle>São Paulo, SP</C.WeatherSubtitle>

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
