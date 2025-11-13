import styled from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 10px;
    background-color: ${props => (props.changeBackground ? '#000' : 'transparent')};
    transition: background-color 0.6s ease-in-out;

    img{
        width: 30%;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    margin: 0 20px
`;

export const Li = styled.li`
    position: relative;

    a{
        color: #FFFFFF;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s;

        &:hover{
            color: #6C63FF; // Roxo suave alternativo
        }
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => (props.isActive ? '100%' : '0')};
        background-color: #6C63FF; // Roxo suave alternativo
        position: absolute;
        bottom: -10px;
        left: 0;
        transition: width 0.4s ease-in-out;
    }
`;


