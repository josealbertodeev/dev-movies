import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Mascara para escurecer a imagem de fundo */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    height: 100%;
    max-width: 1200px;
`;

export const Info = styled.div`
    z-index: 1;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 19px;
        color: #fff;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`;

export const Poster = styled.div`
    z-index: 1;

    img{
        width: 400px;
        border-radius: 30px;
    }
`;


