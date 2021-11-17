import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #FFF;
    height: 100%;
    width: 30%;
    border-radius: 16px 0px 0px 16px;
`;

export const Image = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 20px;
`;

export const Title = styled.h1`
    margin-top: 50px;
    font-size: 72px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #5B5B5B;
`;
export const Subtitle = styled.h2`
    font-size: 21px;
    font-family: 'Roboto';
    font-weight: 300;
    color: #5B5B5B
`;