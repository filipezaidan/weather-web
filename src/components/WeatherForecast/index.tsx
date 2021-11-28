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
    },
    loading: boolean;
}

const WeatherForecast = ({ data , loading} : Props) => {

    return(
        <C.Container>
            {loading? 
                <h1>Carregando...</h1> 
                : 
                <C.Card>
                    {data?.forecast.slice(1,6).map((item : ItemWeather, index) => <WeatherDay key={index} data={item}/>)}
                </C.Card>
            }

            <C.Message>Atualizado há alguns minutos...</C.Message>
        </C.Container>
    );
}

export default WeatherForecast;