import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 10px;

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
    a{
        color: #FFFFFF;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s;


        &:hover{
            color: #FF0000;
        }
    }
`;


