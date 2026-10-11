import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`

export const Background = styled.div`
    background-image: url(${props => props.$image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    min-width: 1200px;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: 100px;

`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;

    img{
        width: 400px;
        border-radius: 30px;
        border: 4px solid transparent;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2{
        font-size: 32px;
        font-weight: 700;
        color: #fff;
    }

    p{
        font-weight: 200;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;
    }
`
export const ContainerMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        margin: 20px 0;
    }

    h4{
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe{
        border: none;
    }

`