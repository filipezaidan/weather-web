//Libraries
import { FiSearch } from 'react-icons/fi';

//Styles
import * as C from './styles'

//Interface
interface Props{
  city: string,
  onChange: (e:any) => void,
  getWeatherByCity: (e:any) => void,
}

const Search = ({ city, onChange, getWeatherByCity } : Props) => {
  return(
      <C.Container> 
        <C.Input 
          placeholder="Digite uma cidade..."
          onChange={e => onChange(e)}
          value={city}
        />
        <C.Button onClick={(e) => getWeatherByCity(e)}>
          <FiSearch size={24} color="#2EA9D3"/>
        </C.Button>

      </C.Container>
  );
}

export default Search;