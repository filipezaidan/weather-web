import * as C from './styles'
import climate from '../../assets/climate.png';

const WeatherDay = () => {
    return(
        <C.Container>
            <C.Day>HOJE</C.Day>
            <C.Icon src={climate}/>

            <C.Temperature>
                <C.Max>27º</C.Max>

                <C.Min>23º</C.Min>
            </C.Temperature>
        </C.Container>
    );
}

export default WeatherDay;