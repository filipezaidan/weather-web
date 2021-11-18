//Type
import {ItemWeather} from '../../@type/Weather';

//Styles
import * as C from './styles'

//Assets
import climate from '../../assets/climate.png'

//Interface
interface Props {
    data: ItemWeather,
}

const WeatherDay = ({ data }: Props) => {    
    return(
        <C.Container>
            <C.Day>{data.weekday}</C.Day>
            
            <C.Icon src={climate}/>

            <C.Temperature>
                <C.Max>{data.max}º</C.Max>

                <C.Min>{data.min}º</C.Min>
            </C.Temperature>
        </C.Container>
    );  
}

export default WeatherDay;