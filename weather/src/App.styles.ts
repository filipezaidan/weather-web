import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: #2EA9D3;
    padding-inline: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const Container = styled.div`
    /* display: inline-block; */
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center; 
    /* background-color: red; */
`;

export const Logo = styled.img`
    width: 250px;
`;

export const Search = styled.div`
    display: flex;
    padding: 5px 20px;
    

    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 3%;
    width: 80%;
    height: 40px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const SearchInput = styled.input`
    width: 100%;
    align-items: center; 
    border: none;
    font-family: 'Roboto';
    font-size: 19px;
    color: #5B5B5B;
    font-weight: 200;
    /* background-color: red; */
`

export const SearchIcon = styled.p`
    width: 40px;
    background-color: red;
`
export const WeatherArea = styled.div`
    display: flex;
    height: 450px;
    width: 80%;
    border-radius: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    

`;
export const WeatherToday = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #FFF;
    height: 100%;
    width: 30%;
    border-radius: 16px 0px 0px 16px;
    
`;
export const WeatherWrapper = styled.div`
    display: flex;
    /* padding: 20px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E4E4E4;
    height: 100%;
    width: 70%;
    border-radius: 0px 16px 16px 0px;   
`;
export const WeatherWeek = styled.div`
    display: flex;
    flex-direction: row;
`;

export const WeatherUpdate = styled.p`
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #9A9999;
    margin-top: 25px
`;
export const WeatherImage = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 20px;
`;

export const WeatherTitle = styled.h1`
    margin-top: 50px;
    font-size: 72px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #5B5B5B;
`;
export const WeatherSubtitle = styled.h2`
    font-size: 21px;
    font-family: 'Roboto';
    font-weight: 300;
    color: #5B5B5B
`;