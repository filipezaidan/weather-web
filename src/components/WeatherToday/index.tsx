import * as C from './styles';
import sun from '../../assets/sun.png';

interface Props{
    data?: {
        city: string;
        temp: number;
    }
}

const WeatherToday = ({ data }: Props) => {

    return(
        <C.Container>
            <C.Image src={sun}/>

            <C.Title>{data?.temp}</C.Title>
            <C.Subtitle>{data?.city}</C.Subtitle>

          </C.Container>
    );
}

export default WeatherToday;