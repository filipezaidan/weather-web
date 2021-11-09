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
    padding: 5px 10px;
    

    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 80%;
    height: 40px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const SearchInput = styled.form`
    display: flex;
    width: 100%;
    /* background-color: blue; */
    align-items: center;
`

export const SearchIcon = styled.p`
    /* background-color: red; */
    width: 40px;
`

export const Placeholder = styled.p`
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 500;
    color: #5B5B5B;
    /* background-color:pink */
`

export const WeatherArea = styled.div`
    display: flex;
    height: 450px;
    width: 80%;
    border-radius: 16px;
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
export const WeatherWeek = styled.div`
    background-color: #E4E4E4;
    height: 100%;
    width: 70%;
    border-radius: 0px 16px 16px 0px;   
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
    /* background-color:red; */
`;
export const WeatherSubtitle = styled.h2`
    font-size: 55px;
    font-family: 'Roboto';
    font-weight: 300;
    color: #5B5B5B
`;