import styled from "styled-components";


export const Conatainer = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.5s ease-in-out;

    img{
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;

`

export const Li = styled.li`
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : '0'};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`