import { FiSearch } from 'react-icons/fi';
import * as C from './styles'


interface Props{
    city: string,
    onChange: (e:any) => void,
    getWeatherByCity: (e:any) => void,

}

const Search = ({city, onChange, getWeatherByCity} : Props) => {
    return(
        <C.Search> 
          <C.SearchInput 
            placeholder="Digite uma cidade..."
            onChange={e => onChange(e)}
            value={city}
          />
          <C.SearchButton onClick={(e) => getWeatherByCity(e)}>
            <FiSearch size={24} color="#2EA9D3"/>
          </C.SearchButton>

        </C.Search>
    );
}

export default Search;