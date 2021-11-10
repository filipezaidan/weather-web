import * as C from './App.styles';
import logo from './assets/Logo.png';
import sun from './assets/sun.png';

import { FiSearch } from 'react-icons/fi';
import WeatherDay from './components/WeatherWeekDay';

const App = () => {
  return (
    <C.Wrapper>  
      <C.Container>
        <C.Logo src={logo}/>

        <C.Search>
          <C.SearchInput placeholder="Digite uma cidade..."/>
          <FiSearch size={24} color="#2EA9D3"/>
          {/* <C.SearchIcon>?</C.SearchIcon> */}

        </C.Search>

        <C.WeatherArea>
          <C.WeatherToday>
            <C.WeatherImage src={sun}/>

            <C.WeatherTitle>47º</C.WeatherTitle>
            <C.WeatherSubtitle>São Paulo, SP</C.WeatherSubtitle>

          </C.WeatherToday>

          <C.WeatherWeek>
            <WeatherDay/>
          </C.WeatherWeek>
        </C.WeatherArea>

      </C.Container>
    </C.Wrapper>
  );
}

export default App;
