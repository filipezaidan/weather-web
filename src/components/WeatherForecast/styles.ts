import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E4E4E4;
    height: 100%;
    width: 70%;
    border-radius: 0px 16px 16px 0px;   
`;
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 520px;
`;

export const Message = styled.p`
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #9A9999;
    margin-top: 25px;
`;