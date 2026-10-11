import styled from 'styled-components'

export const GridSection = styled.section`
    padding: 40px 40px 60px;

    h2{
        color: #fff;
        font-size: 28px;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        padding: 30px 16px 40px;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
`

export const Tab = styled.button`
    background: ${props => props.$active ? '#ff0000' : 'transparent'};
    color: #fff;
    border: 2px solid ${props => props.$active ? '#ff0000' : '#fff'};
    border-radius: 30px;
    padding: 8px 18px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;

    &:hover{
        border-color: #ff0000;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 24px;

    a, div{
        display: block;
    }

    img{
        width: 100%;
        aspect-ratio: 2 / 3;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 16px;
    }
`

export const LoadMore = styled.button`
    display: block;
    margin: 40px auto 0;
    background: transparent;
    color: #fff;
    border: 3px solid #fff;
    border-radius: 30px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background: #fff;
        color: #ff0000;
    }
`
