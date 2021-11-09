import * as C from './App.styles';
import logo from './assets/Logo.png';
import sun from './assets/sun.png';

const App = () => {
  return (
    <C.Wrapper>  
      <C.Container>
        <C.Logo src={logo}/>

        <C.Search>
          <C.SearchInput>
            <C.SearchIcon>?</C.SearchIcon>
            <C.Placeholder>Digite uma cidade...</C.Placeholder>
          </C.SearchInput>
        </C.Search>

        <C.WeatherArea>
          <C.WeatherToday>
            <C.WeatherImage src={sun}/>

            <C.WeatherTitle>47º</C.WeatherTitle>
            <C.WeatherSubtitle>29</C.WeatherSubtitle>

          </C.WeatherToday>

          <C.WeatherWeek>

          </C.WeatherWeek>
        </C.WeatherArea>

      </C.Container>
    </C.Wrapper>
  );
}

export default App;
