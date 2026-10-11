import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background: #000;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 50px;
    max-width: 1200px;
    border-radius: 20px;

    p{
        color: #fff;
        padding: 20px;
    }

    iframe{
        border: none;
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    @media (max-width: 768px) {
        width: 92%;
        padding: 45px 10px 10px;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 15px;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 36px;
    line-height: 1;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover{
        color: #ff0000;
    }
`
