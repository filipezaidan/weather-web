import * as C from './styles'
import climate from '../../assets/climate.png'
import * as Ionicons  from 'react-icons/wi';

import { Item } from '../../@type/Weather';

import { WeatherIcon } from '../../utils/WeatherIcon';


const WeatherDay = ({data}: Item) => {
    
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