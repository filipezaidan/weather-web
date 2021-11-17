import * as C from './styles';
import WeatherDay from '../../components/WeatherWeekDay';
import { ItemWeather } from '../../@type/Weather';

interface Props{
    data?: {
        forecast: ItemWeather[]
    }
}

const WeatherForecast = ({ data } : Props) => {

    return(
        <C.Container>
            <C.Card>
                {data?.forecast.slice(1,6).map((item : any) => <WeatherDay data={item}/>)}
            </C.Card>

            <C.Message>Atualizado há alguns minutos...</C.Message>
        </C.Container>
    );
}

export default WeatherForecast;