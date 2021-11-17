import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;
    width: 100px;
    height: 220px;
    margin: 0px 10px;
    border-radius: 10px;
`;
export const Day = styled.p`
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #2EA9D3;

`;
export const Icon = styled.img``;
export const Temperature = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;
export const Max = styled.div`
    font-size: 28px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #2EA9D3;
`;
export const Min = styled.div`
    font-size: 23px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #EFC75E;
`;