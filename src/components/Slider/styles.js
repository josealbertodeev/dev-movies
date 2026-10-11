
import styled from 'styled-components'

export const Container = styled.div `

    padding: 0 20px;

    h2{
        color: #fff;
        font-size: 24px;
        margin: 50px 0 20px 20px;
    }
    .swiper-wrapper{
        display: flex;
    }

    @media (max-width: 768px) {
        padding: 0 10px;

        h2{
            font-size: 20px;
            margin: 30px 0 15px 10px;
        }
    }
`