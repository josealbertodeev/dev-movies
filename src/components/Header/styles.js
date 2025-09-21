import styled from "styled-components";


export const Conatainer = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;

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

    a{
        text-decoration: none;
        color: #fff;
    }
`