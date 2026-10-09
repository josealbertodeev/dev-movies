
import styled from 'styled-components'

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 28%;
        padding: 10px 50px;
    }
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
`
export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 24px;
    position: relative;
    margin-right: 40px;
    a{
        text-decoration: none;
        color: #fff
    }

    &::after{
        content:'';
        height: 3px;
        width: ${props => props.isActive ? '100%' : '0%'};
        background-color: #ff0000;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.4s ease-in-out
    }

    &:hover::after{
        width: 100%;
    }
`