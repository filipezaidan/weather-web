//Components
import WeatherDay from '../../components/WeatherWeekDay';

//Types
import { ItemWeather } from '../../@type/Weather';

//Styles
import * as C from './styles';

//Interface
interface Props{
    data?: {
        forecast: ItemWeather[]
    }
}

const WeatherForecast = ({ data } : Props) => {

    return(
        <C.Container>
            <C.Card>
                {data?.forecast.slice(1,6).map((item : ItemWeather) => <WeatherDay data={item}/>)}
            </C.Card>

            <C.Message>Atualizado há alguns minutos...</C.Message>
        </C.Container>
    );
}

export default WeatherForecast;